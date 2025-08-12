// src/components/IndianPlayers.js
import React from "react";

const IndianPlayers = () => {
  // Array destructuring example
  const players = [
    "Virat Kohli",
    "Rohit Sharma",
    "Shikhar Dhawan",
    "KL Rahul",
    "Rishabh Pant",
    "Hardik Pandya",
    "Ravindra Jadeja",
    "Bhuvneshwar Kumar",
    "Jasprit Bumrah",
    "Yuzvendra Chahal",
    "Mohammed Shami"
  ];

  // Destructure first two players
  const [captain, viceCaptain, ...rest] = players;

  // Separate Odd and Even team players
  const oddPlayers = players.filter((_, index) => index % 2 !== 0);
  const evenPlayers = players.filter((_, index) => index % 2 === 0);

  // Merge arrays example
  const T20Players = ["Virat Kohli", "Rohit Sharma", "KL Rahul"];
  const RanjiPlayers = ["Prithvi Shaw", "Mayank Agarwal", "Cheteshwar Pujara"];
  const mergedPlayers = [...T20Players, ...RanjiPlayers]; // spread operator

  return (
    <div>
      <h2>Odd Team Players (Using destructuring)</h2>
      <ul>
        {oddPlayers.map((p, i) => (
          <li key={i}>{p}</li>
        ))}
      </ul>

      <h2>Even Team Players</h2>
      <ul>
        {evenPlayers.map((p, i) => (
          <li key={i}>{p}</li>
        ))}
      </ul>

      <h2>Merged Players (T20 + Ranji)</h2>
      <ul>
        {mergedPlayers.map((p, i) => (
          <li key={i}>{p}</li>
        ))}
      </ul>

      <h4>Captain: {captain}</h4>
      <h4>Vice Captain: {viceCaptain}</h4>
    </div>
  );
};

export default IndianPlayers;
