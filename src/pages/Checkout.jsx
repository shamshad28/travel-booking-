import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Checkout() {
  const location = useLocation();
  const navigate = useNavigate();
  const reservation = location.state;

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    cardNumber: "",
    expiry: "",
  });

  if (!reservation) {
    return (
      <div style={{ padding: "40px" }}>
        No booking in progress. Please choose a property first.
      </div>
    );
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleConfirm = (e) => {
    e.preventDefault();

    const newBooking = {
      id: Date.now(),
      propertyTitle: reservation.property.title,
      price: reservation.totalPrice,
      nights: reservation.nights,
      checkIn: reservation.checkIn,
      checkOut: reservation.checkOut,
      guestName: formData.fullName,
      bookedAt: new Date().toLocaleDateString(),
    };

    const existing = JSON.parse(localStorage.getItem("travelnest_bookings") || "[]");
    localStorage.setItem("travelnest_bookings", JSON.stringify([...existing, newBooking]));

    alert("Booking confirmed successfully!");
    navigate("/bookings");
  };

  return (
    <div className="details-container" style={{ maxWidth: "600px", margin: "40px auto" }}>
      <h2>Confirm and Pay</h2>
      <p style={{ color: "var(--muted)", marginBottom: "20px" }}>
        {reservation.property.title} • {reservation.nights} nights
      </p>

      <form onSubmit={handleConfirm}>
        <div className="form-group">
          <label>Full Name</label>
          <input
            type="text"
            name="fullName"
            required
            value={formData.fullName}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Email Address</label>
          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Card Number (Demo)</label>
          <input
            type="text"
            name="cardNumber"
            placeholder="4242 •••• •••• 4242"
            required
            maxLength="19"
            value={formData.cardNumber}
            onChange={handleChange}
          />
        </div>

        <div className="price-summary-row total" style={{ margin: "20px 0" }}>
          <span>Total Amount</span>
          <span>${reservation.totalPrice}</span>
        </div>

        <button type="submit" className="primary-button">
          Pay ${reservation.totalPrice}
        </button>
      </form>
    </div>
  );
}

export default Checkout;