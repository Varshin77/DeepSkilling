// src/components/OfficeSpace.js
import React from "react";

const OfficeSpace = () => {
  // Object representing a single office
  const singleOffice = {
    name: "WeWork - Cyber Towers",
    rent: 55000,
    address: "Hitech City, Hyderabad",
    image: "https://via.placeholder.com/300x200?text=Office+Space"
  };

  // Array of multiple office spaces
  const officeList = [
    {
      name: "WeWork - Cyber Towers",
      rent: 55000,
      address: "Hitech City, Hyderabad",
      image: "https://via.placeholder.com/300x200?text=Office+1"
    },
    {
      name: "Regus - Mindspace",
      rent: 65000,
      address: "Madhapur, Hyderabad",
      image: "https://via.placeholder.com/300x200?text=Office+2"
    },
    {
      name: "Cowrks - Financial District",
      rent: 70000,
      address: "Gachibowli, Hyderabad",
      image: "https://via.placeholder.com/300x200?text=Office+3"
    }
  ];

  // Inline CSS for container
  const containerStyle = {
    padding: "20px",
    fontFamily: "Arial"
  };

  // Heading JSX element
  const heading = <h1 style={{ textAlign: "center" }}>🏢 Office Space Rental</h1>;

  return (
    <div style={containerStyle}>
      {/* Display heading */}
      {heading}

      {/* Display single office details */}
      <h2>{singleOffice.name}</h2>
      <img src={singleOffice.image} alt="Office" style={{ width: "300px" }} />
      <p>
        <strong>Address:</strong> {singleOffice.address}
      </p>
      <p
        style={{
          color: singleOffice.rent < 60000 ? "red" : "green"
        }}
      >
        <strong>Rent:</strong> ₹{singleOffice.rent}
      </p>

      <hr />

      {/* Display multiple offices using map() */}
      <h2>Available Offices</h2>
      {officeList.map((office, index) => (
        <div key={index} style={{ marginBottom: "20px" }}>
          <h3>{office.name}</h3>
          <img src={office.image} alt={office.name} style={{ width: "300px" }} />
          <p>
            <strong>Address:</strong> {office.address}
          </p>
          <p
            style={{
              color: office.rent < 60000 ? "red" : "green"
            }}
          >
            <strong>Rent:</strong> ₹{office.rent}
          </p>
        </div>
      ))}
    </div>
  );
};

export default OfficeSpace;
