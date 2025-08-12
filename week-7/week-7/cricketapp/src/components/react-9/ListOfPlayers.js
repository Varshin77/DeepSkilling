// src/components/ListOfPlayers.js
import React from "react";

const ListOfPlayers = () => {
  // Declare array of players (name & score)
  const players = [
    { name: "Virat Kohli", score: 85 },
    { name: "Rohit Sharma", score: 45 },
    { name: "Shikhar Dhawan", score: 72 },
    { name: "KL Rahul", score: 65 },
    { name: "Rishabh Pant", score: 90 },
    { name: "Hardik Pandya", score: 68 },
    { name: "Ravindra Jadeja", score: 50 },
    { name: "Bhuvneshwar Kumar", score: 30 },
    { name: "Jasprit Bumrah", score: 20 },
    { name: "Yuzvendra Chahal", score: 55 },
    { name: "Mohammed Shami", score: 40 },
  ];

  // Filter players with scores below 70 using arrow function
  const lowScorers = players.filter(player => player.score < 70);

  return (
    <div>
      <h2>All Players (Using map)</h2>
      <ul>
        {players.map((player, index) => (
          <li key={index}>
            {player.name} - {player.score}
          </li>
        ))}
      </ul>

      <h2>Players with score below 70 (Using filter + arrow function)</h2>
      <ul>
        {lowScorers.map((player, index) => (
          <li key={index}>
            {player.name} - {player.score}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListOfPlayers;
