// src/components/EventExamples.js
import React, { Component } from "react";

class EventExamples extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };

    // Binding "this" for class methods
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.sayHello = this.sayHello.bind(this);
    this.sayWelcome = this.sayWelcome.bind(this);
  }

  // Method to increment
  increment() {
    this.setState({ count: this.state.count + 1 });
  }

  // Method to decrement
  decrement() {
    this.setState({ count: this.state.count - 1 });
  }

  // Method to say hello
  sayHello() {
    console.log("Hello! Have a great day!");
  }

  // Method with argument
  sayWelcome(message) {
    alert(message);
  }

  // Synthetic event example
  handleClick = (event) => {
    alert("I was clicked!");
    console.log("Synthetic Event:", event); // synthetic event object
  };

  // Method that calls multiple functions
  handleIncrementAndHello = () => {
    this.increment();
    this.sayHello();
  };

  render() {
    return (
      <div style={{ padding: "20px", fontFamily: "Arial" }}>
        <h2>React Event Handling Examples</h2>
        <p>Count: {this.state.count}</p>

        {/* Increment button with multiple method calls */}
        <button onClick={this.handleIncrementAndHello}>Increment</button>

        {/* Decrement button */}
        <button onClick={this.decrement} style={{ marginLeft: "10px" }}>
          Decrement
        </button>

        {/* Say Welcome with argument */}
        <button
          onClick={() => this.sayWelcome("Welcome to React Event Handling!")}
          style={{ marginLeft: "10px" }}
        >
          Say Welcome
        </button>

        {/* Synthetic event button */}
        <button onClick={this.handleClick} style={{ marginLeft: "10px" }}>
          OnPress Synthetic Event
        </button>
      </div>
    );
  }
}

export default EventExamples;
