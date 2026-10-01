import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import properties from "../data/properties";

function Details() {
  const { id } = useParams();
  const navigate = useNavigate();
  const property = properties.find((p) => String(p.id) === String(id));

  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");

  if (!property) {
    return <div style={{ padding: "40px" }}>Property not found.</div>;
  }

  const calculateDays = () => {
    if (!checkIn || !checkOut) return 1;
    const diff = new Date(checkOut) - new Date(checkIn);
    const days = Math.ceil(diff / (1000 * 60 * 60 * 24));
    return days > 0 ? days : 1;
  };

  const nights = calculateDays();
  const totalPrice = property.price * nights;

  const handleProceedToCheckout = (e) => {
    e.preventDefault();
    navigate("/checkout", {
      state: { property, checkIn, checkOut, nights, totalPrice },
    });
  };

  return (
    <div className="details-container">
      <h2>{property.title}</h2>
      <p className="property-location">{property.location || property.city}</p>

      <div className="details-gallery">
        <img
          src={property.image}
          alt={property.title}
          className="gallery-main-img"
          onError={(e) => {
            e.target.src = "https://images.unsplash.com/photo-1564013799919-ab600027ffc6";
          }}
        />
      </div>

      <div className="details-layout">
        <div>
          <h3>About this stay</h3>
          <p style={{ marginTop: "12px", color: "var(--muted)" }}>
            {property.description ||
              "Experience world-class hospitality in this prime destination. Enjoy luxury amenities, peaceful surroundings, and effortless access to city sights."}
          </p>
          <div style={{ marginTop: "24px" }}>
            <strong>Max Guests:</strong> {property.guests || 2} <br />
            <strong>Rating:</strong> ★ {property.rating}
          </div>
        </div>

        <div className="booking-card">
          <h3>
            ${property.price} <span style={{ fontSize: "0.85rem", color: "var(--muted)" }}>/ night</span>
          </h3>

          <form onSubmit={handleProceedToCheckout} style={{ marginTop: "16px" }}>
            <div className="form-group">
              <label>Check In</label>
              <input
                type="date"
                required
                value={checkIn}
                onChange={(e) => setCheckIn(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Check Out</label>
              <input
                type="date"
                required
                min={checkIn}
                value={checkOut}
                onChange={(e) => setCheckOut(e.target.value)}
              />
            </div>

            <div className="price-summary-row">
              <span>${property.price} × {nights} nights</span>
              <span>${totalPrice}</span>
            </div>
            <div className="price-summary-row total">
              <span>Total</span>
              <span>${totalPrice}</span>
            </div>

            <button type="submit" className="primary-button" style={{ marginTop: "16px" }}>
              Reserve Stay
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Details;