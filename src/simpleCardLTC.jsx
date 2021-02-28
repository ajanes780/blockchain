import React, { useState, useEffect } from "react";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    maxWidth: 100,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function SimpleCardLTC() {
  const classes = useStyles();
  const bullet = <span className={classes.bullet}>•</span>;

  const [coinPrice, setCoinPrice] = useState({ base: "BTC", amount: "50000" });

  // this will be a axios call to get all the price data
  useEffect(() => {
    return axios
      .get("https://api.coinbase.com/v2/prices/LTC-USD/buy")
      .then((res) => {
        setCoinPrice(res.data.data);
        console.log("res.data.data :>> ", res.data.data);
      })
      .catch((err) => {
        console.log("err :>> ", err);
      });
  }, []);

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          This is a Price Card
        </Typography>
        <Typography variant="h5" component="h2">
          {coinPrice.base}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {/* adjective */}
        </Typography>
        <Typography variant="body2" component="p">
          This Price is only valid now
          <br />
          {coinPrice.amount}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
