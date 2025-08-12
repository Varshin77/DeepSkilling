// src/components/CurrencyConvertor.js
import React, { Component } from "react";

class CurrencyConvertor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rupees: "",
      euros: ""
    };
  }

  // Handle input change
  handleChange = (event) => {
    this.setState({ rupees: event.target.value });
  };

  // Handle form submission
  handleSubmit = (event) => {
    event.preventDefault(); // prevent page refresh
    const { rupees } = this.state;
    const conversionRate = 0.011; // approx 1 INR = 0.011 EUR
    const euros = (rupees * conversionRate).toFixed(2);
    this.setState({ euros });
  };

  render() {
    return (
      <div style={{ padding: "20px", fontFamily: "Arial" }}>
        <h2>Currency Converter</h2>
        <form onSubmit={this.handleSubmit}>
          <label>
            Indian Rupees:{" "}
            <input
              type="number"
              value={this.state.rupees}
              onChange={this.handleChange}
            />
          </label>
          <button type="submit" style={{ marginLeft: "10px" }}>
            Convert
          </button>
        </form>

        {this.state.euros && (
          <p>
            {this.state.rupees} INR = {this.state.euros} EUR
          </p>
        )}
      </div>
    );
  }
}

export default CurrencyConvertor;
