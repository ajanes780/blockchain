import "./App.css";
import React from "react";
import SimpleCard from "./simpleCardBTC";
import SimpleCardEth from "./simplecardETH";
import SimpleCardDoge from "./simpleCardDoge";
// i want to render the coin prices here  maybe in a LIST first
function App(props) {
  console.log("props", props);

  return (
    <div className="App">
      <h2> This is the start </h2>
      <SimpleCard />
      <SimpleCardEth />
      <SimpleCardDoge />
    </div>
  );
}

export default App;
