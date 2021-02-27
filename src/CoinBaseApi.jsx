import React, { useState, useEffect } from "react";
import axios from "axios";

// this will be a axios call to get all the price data

function CoinBaseApi() {
  const [coinPrice, setCoinPrice] = useState({ base: "BTC", amount: "50000" });

  useEffect(() => {
    return axios
      .get("https://api.coinbase.com/v2/prices/BTC-USD/buy")
      .then((res) => {
        setCoinPrice(res.data.data);
      });
  }, []);

  console.log("coinPrice :>> ", coinPrice);
  // i have to pass the data from state as props to the  app to be rendered

  return (
    <div>
      <p>
        What coin is this : {coinPrice.base} and what is the price:
        {coinPrice.amount}
      </p>
    </div>
  );
}

export default CoinBaseApi;
