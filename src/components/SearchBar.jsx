import { useState } from "react";

function SearchBar({ onSearch }) {
  const [destination, setDestination] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSearch) {
      onSearch({ destination, checkIn, checkOut, guests: Number(guests) });
    }
  };

  return (
    <div className="search-bar-container">
      <form onSubmit={handleSubmit} className="search-inputs-grid">
        <div className="search-input-group">
          <label htmlFor="destination">Where</label>
          <input
            id="destination"
            type="text"
            placeholder="Search destinations..."
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
          />
        </div>

        <div className="search-input-group">
          <label htmlFor="checkin">Check in</label>
          <input
            id="checkin"
            type="date"
            value={checkIn}
            onChange={(e) => setCheckIn(e.target.value)}
          />
        </div>

        <div className="search-input-group">
          <label htmlFor="checkout">Check out</label>
          <input
            id="checkout"
            type="date"
            min={checkIn}
            value={checkOut}
            onChange={(e) => setCheckOut(e.target.value)}
          />
        </div>

        <div className="search-input-group">
          <label htmlFor="guests">Guests</label>
          <select
            id="guests"
            value={guests}
            onChange={(e) => setGuests(e.target.value)}
          >
            <option value="1">1 Guest</option>
            <option value="2">2 Guests</option>
            <option value="3">3 Guests</option>
            <option value="4">4 Guests</option>
            <option value="5">5+ Guests</option>
          </select>
        </div>

        <button type="submit" className="search-btn">
          Search
        </button>
      </form>
    </div>
  );
}

export default SearchBar;