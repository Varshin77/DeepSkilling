// src/components/UserPage.js
import React from "react";

const UserPage = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h2>Welcome! Book Your Flight Tickets</h2>
      <ul>
        <li>
          Hyderabad → Delhi — <button>Book</button>
        </li>
        <li>
          Hyderabad → Mumbai — <button>Book</button>
        </li>
        <li>
          Hyderabad → Bengaluru — <button>Book</button>
        </li>
      </ul>
    </div>
  );
};

export default UserPage;
