import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">

      <Link to="/" className="logo">
        TravelNest
      </Link>

      <div className="nav-links">

        <Link to="/">
          Home
        </Link>

        <Link to="/favorites">
          ❤️ Favorites
        </Link>

        <Link to="/bookings">
          📦 Bookings
        </Link>

      </div>

    </nav>
  );
}

export default Navbar;