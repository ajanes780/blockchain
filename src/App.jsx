import "./App.css";
import React from "react";
import SimpleCard from "./simpleCardBTC";
import SimpleCardEth from "./simplecardETH";
import SimpleCardLTC from "./simpleCardLTC";
import PrimarySearchAppBar from "./navBar";
import DataGridDemo from "./datagrid";
// i want to render the coin prices here  maybe in a LIST first
function App(props) {
  console.log("props", props);

  return (
    <div className="App">
      <PrimarySearchAppBar />
      <DataGridDemo />
      <br></br>
      <div>
        <SimpleCard />
        <SimpleCardEth />
        <SimpleCardLTC />
      </div>
    </div>
  );
}

export default App;
