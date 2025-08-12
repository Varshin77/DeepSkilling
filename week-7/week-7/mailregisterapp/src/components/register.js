import React, { useState } from "react";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Validate on form submit
  const handleSubmit = (e) => {
    e.preventDefault();

    // Name validation
    if (name.trim().length < 5) {
      alert("Name should have at least 5 characters.");
      return;
    }

    // Email validation
    if (!email.includes("@") || !email.includes(".")) {
      alert("Email should contain '@' and '.' characters.");
      return;
    }

    // Password validation
    if (password.length < 8) {
      alert("Password should have at least 8 characters.");
      return;
    }

    // Success
    alert("Registration Successful!");
    setName("");
    setEmail("");
    setPassword("");
  };

  return (
    <div style={{ textAlign: "center", marginTop: "30px" }}>
      <h2>Mail Registration Form</h2>

      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "10px" }}>
          <label style={{ marginRight: "10px" }}>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            required
          />
        </div>

        <div style={{ marginBottom: "10px" }}>
          <label style={{ marginRight: "10px" }}>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
          />
        </div>

        <div style={{ marginBottom: "10px" }}>
          <label style={{ marginRight: "10px" }}>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            required
          />
        </div>

        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
