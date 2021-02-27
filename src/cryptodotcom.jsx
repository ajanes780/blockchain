import React, { useEffect, useState } from "react";
import axios from "axios";

function cryptodotcom() {
  const [coinPrice, setCoinPrice] = useState({ base: "BTC", amount: "50000" });

  // this will be a axios call to get all the price data
  useEffect(() => {
    return axios
      .get("https://api.coinbase.com/v2/prices/ETH-USD/buy")
      .then((res) => {
        setCoinPrice(res.data.data);
      });
  }, []);

  return <div></div>;
}

export default cryptodotcom;
