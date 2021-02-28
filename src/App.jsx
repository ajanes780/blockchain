import "./App.css";
import React from "react";
import SimpleCard from "./simpleCardBTC";
import SimpleCardEth from "./simplecardETH";
import SimpleCardLTC from "./simpleCardLTC";
import PrimarySearchAppBar from "./navBar";
import DataGridDemo from "./datagrid";
import CssBaseline from "@material-ui/core/CssBaseline";
import MyChart from "./chart";
function App(props) {
  return (
    <div className="App">
      <CssBaseline />
      <PrimarySearchAppBar />
      <DataGridDemo />
      <br></br>
      <MyChart />
      <div>
        <SimpleCard />
        <SimpleCardEth />
        <SimpleCardLTC />
      </div>
    </div>
  );
}

export default App;
