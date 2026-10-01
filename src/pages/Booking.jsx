import { useState } from "react";
import { Link } from "react-router-dom";

function PropertyCard({ property }) {
  // Read directly on mount — no useEffect or cascading renders
  const [isFavorite, setIsFavorite] = useState(() => {
    try {
      const savedFavorites = JSON.parse(localStorage.getItem("travelnest_favs") || "[]");
      return savedFavorites.includes(property.id);
    } catch {
      return false;
    }
  });

  const toggleFavorite = (e) => {
    e.preventDefault();
    try {
      const savedFavorites = JSON.parse(localStorage.getItem("travelnest_favs") || "[]");
      let updated;
      if (savedFavorites.includes(property.id)) {
        updated = savedFavorites.filter((id) => id !== property.id);
        setIsFavorite(false);
      } else {
        updated = [...savedFavorites, property.id];
        setIsFavorite(true);
      }
      localStorage.setItem("travelnest_favs", JSON.stringify(updated));
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="property-card">
      <div className="property-image-container">
        <img
          src={property.image || "https://images.unsplash.com/photo-1564013799919-ab600027ffc6"}
          alt={property.title}
          className="property-image"
          onError={(e) => {
            e.target.src = "https://images.unsplash.com/photo-1564013799919-ab600027ffc6";
          }}
        />
        <button
          onClick={toggleFavorite}
          className="favorite-btn"
          aria-label="Save to favorites"
        >
          {isFavorite ? "❤️" : "🤍"}
        </button>
      </div>

      <div className="property-info">
        <div className="property-header">
          <h3 className="property-title">{property.title}</h3>
          <span className="property-rating">★ {property.rating}</span>
        </div>
        <p className="property-location">{property.location || property.city}</p>

        <div className="property-price-box">
          <div className="property-price">
            ${property.price} <span>/ night</span>
          </div>
          <Link to={`/property/${property.id}`} className="view-btn">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}

export default PropertyCard;