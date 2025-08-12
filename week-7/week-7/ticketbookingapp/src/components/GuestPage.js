// src/components/GuestPage.js
import React from "react";

const GuestPage = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h2>Flight Details</h2>
      <p>✈ Hyderabad → Delhi — ₹5,500</p>
      <p>✈ Hyderabad → Mumbai — ₹4,800</p>
      <p>✈ Hyderabad → Bengaluru — ₹3,200</p>
      <p style={{ color: "gray" }}>
        Please log in to book your tickets.
      </p>
    </div>
  );
};

export default GuestPage;
