import "./App.css";
import React from "react";
import CoinBaseApi from "./CoinBaseApi";
// import fragments from "fragments";
// i want to render the coin prices here  maybe in a LIST first
function App(props) {
  console.log("props", props);

  return (
    <div className="App">
      <h2> This is the start </h2>
      <CoinBaseApi />
    </div>
  );
}

export default App;
