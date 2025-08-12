// src/components/TicketBookingApp.js
import React, { useState } from "react";
import GuestPage from "./GuestPage";
import UserPage from "./UserPage";

const TicketBookingApp = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Toggle login/logout
  const handleLogin = () => setIsLoggedIn(true);
  const handleLogout = () => setIsLoggedIn(false);

  // Element variable for conditional rendering
  let pageContent;
  if (isLoggedIn) {
    pageContent = <UserPage />;
  } else {
    pageContent = <GuestPage />;
  }

  // Example: Prevent rendering if needed
  if (false) { // change condition to test
    return null; // nothing will render
  }

  return (
    <div style={{ fontFamily: "Arial", padding: "20px" }}>
      <h1>✈ Ticket Booking App</h1>

      {/* Conditional rendering of button */}
      {isLoggedIn ? (
        <button onClick={handleLogout}>Logout</button>
      ) : (
        <button onClick={handleLogin}>Login</button>
      )}

      {/* Render correct page */}
      {pageContent}
    </div>
  );
};

export default TicketBookingApp;
