import React, { useState } from "react";

const ComplaintRegister = () => {
  const [name, setName] = useState("");
  const [complaint, setComplaint] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Generate a random reference/transaction ID
    const transactionId = Math.floor(Math.random() * 100) + 1;

    // Alert message like the screenshot
    alert(
      `Thanks ${name}\nYour Complaint was Submitted.\nTransaction ID is: ${transactionId}`
    );

    // Clear form after submission
    setName("");
    setComplaint("");
  };

  return (
    <div style={{ textAlign: "center", marginTop: "30px" }}>
      <h2 style={{ color: "red" }}>Register your complaints here!!!</h2>

      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "10px" }}>
          <label style={{ marginRight: "10px" }}>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div style={{ marginBottom: "10px" }}>
          <label style={{ marginRight: "10px" }}>Complaint:</label>
          <textarea
            value={complaint}
            onChange={(e) => setComplaint(e.target.value)}
            rows="3"
            cols="30"
            required
          />
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ComplaintRegister;
