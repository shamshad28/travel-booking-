import { Link } from "react-router-dom";

function PropertyDetails({ property }) {

  return (
    <main className="details-page">

      <div className="details-container">

        {/* Back Button */}

        <Link
          to="/"
          className="back-button"
        >
          ← Back to properties
        </Link>


        {/* Image */}

        <div className="details-image">

          <img
            src={property.image}
            alt={property.title}
          />

        </div>


        {/* Main Content */}

        <div className="details-content">

          <div className="details-main">

            <h1>
              {property.title}
            </h1>

            <p className="details-location">
              📍 {property.location}
            </p>


            <div className="details-rating">

              ⭐ {property.rating}

              <span>
                ({property.reviews} reviews)
              </span>

            </div>


            <div className="property-stats">

              <div>
                🛏️
                <strong>
                  {property.bedrooms}
                </strong>
                <span>
                  Bedrooms
                </span>
              </div>


              <div>
                👥
                <strong>
                  {property.guests}
                </strong>
                <span>
                  Guests
                </span>
              </div>

            </div>


            <hr />


            <h2>
              About this place
            </h2>

            <p className="description">
              {property.description}
            </p>


            <h2>
              What this place offers
            </h2>

            <div className="amenities">

              {property.amenities.map(
                (amenity, index) => (

                  <div
                    className="amenity"
                    key={index}
                  >
                    ✓ {amenity}
                  </div>

                )
              )}

            </div>

          </div>


          {/* Booking Card */}

          <aside className="booking-card">

            <div className="booking-price">

              <strong>
                ₹{property.price.toLocaleString()}
              </strong>

              <span>
                / night
              </span>

            </div>


            <div className="booking-info">

              <div>
                <span>
                  Check-in
                </span>

                <strong>
                  Select date
                </strong>
              </div>


              <div>
                <span>
                  Check-out
                </span>

                <strong>
                  Select date
                </strong>
              </div>

            </div>


            <div className="guest-info">

              <span>
                Guests
              </span>

              <strong>
                Up to {property.guests} guests
              </strong>

            </div>


            <button className="reserve-btn">
              Reserve
            </button>

          </aside>

        </div>

      </div>

    </main>
  );
}

export default PropertyDetails;

