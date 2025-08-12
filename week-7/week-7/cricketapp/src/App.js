import React from "react";
import ListOfPlayers from "./components/react-9/ListOfPlayers";
import IndianPlayers from "./components//react-9/IndianPlayers";
import OfficeSpace from "./components/react-10/OfficeSpace";
import CurrencyConvertor from "./components/react-11/CurrencyConverter";
import EventExamples from "./components/react-11/EventExample";

function App() {
  
  return (
    <div className="App">
      <h1>React-9</h1>
      <h2>ListOfPlayers</h2>
      <ListOfPlayers /> 
      <h2>IndianPlayers</h2>
      <IndianPlayers />
      <h1>React-10</h1>
      <h2>OfficeSpace</h2>
      <OfficeSpace />
      <h1>React-11</h1>
      <h2>EventExamples</h2>
      <EventExamples />
      <h2>CurrencyConverter</h2>
      <CurrencyConvertor />

     
    </div>
  );
}

export default App;
