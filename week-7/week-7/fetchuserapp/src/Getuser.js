import React, { Component } from "react";

class Getuser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: null,
      loading: true
    };
  }

  async componentDidMount() {
    const url = "https://api.randomuser.me/";
    const response = await fetch(url);
    const data = await response.json();

    this.setState({
      person: data.results[0],
      loading: false
    });

    console.log(data.results[0]);
  }

  render() {
    if (this.state.loading) {
      return <div>Loading...</div>;
    }

    if (!this.state.person) {
      return <div>No person found</div>;
    }

    return (
      <div style={{ textAlign: "center", marginTop: "30px" }}>
        <h2>
          {this.state.person.name.title} {this.state.person.name.first}{" "}
          {this.state.person.name.last}
        </h2>
        <img src={this.state.person.picture.large} alt="User" />
      </div>
    );
  }
}

export default Getuser;
