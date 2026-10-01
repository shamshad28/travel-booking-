import { useState, useEffect } from "react";

function Booking() {
  const [bookings, setBooking] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("travelnest_bookings") || "[]");
    setBooking(data);
  }, []);

  return (
    <div style={{ marginTop: "24px" }}>
      <h2>Your Booking</h2>
      {bookings.length === 0 ? (
        <p style={{ marginTop: "12px", color: "var(--muted)" }}>No active bookings found.</p>
      ) : (
        <div style={{ display: "grid", gap: "16px", marginTop: "20px" }}>
          {bookings.map((b) => (
            <div
              key={b.id}
              style={{
                background: "var(--white)",
                padding: "20px",
                borderRadius: "12px",
                border: "1px solid var(--border)",
              }}
            >
              <h3>{b.propertyTitle}</h3>
              <p style={{ color: "var(--muted)" }}>
                Dates: {b.checkIn} to {b.checkOut} ({b.nights} nights)
              </p>
              <p>
                <strong>Total Paid:</strong> ${b.price}
              </p>
              <small style={{ color: "var(--muted)" }}>Booked on: {b.bookedAt}</small>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Booking;