import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';

const Charts = ({ id }) => {
  const [coin, setCoin] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if(coin) {
      setLoading(false);
    }
  }, [coin]);

  useEffect(() => {
    axios.get(`https://api.coingecko.com/api/v3/coins/${id}`)
    .then(res => {
      console.log(res.data);
      setCoin(res.data)
    })
    .catch(err => console.log(err));
  }, [id]);

    if(loading) {
      return(
        <h1>Loading...</h1>
      );
    } else {
      return (
        <div className="charts" style={{ textAlign: "left", padding: "1rem" }}>
            <Link style={{ fontSize: "1.5rem" }} to="/">Home</Link>
            <div className="chart__container" key={coin.name}>
              <h2 className="coin__title">{coin.name}</h2>
              <h4 className="coin__symbol">{coin.symbol}</h4>
              <div className="coin__logo">
                <img src={coin.image.large} height="40" alt={coin.name} />
              </div>
              <div
                style={{display: 'flex'}}
              >
                <h3 style={{ color: "green", margin: "0 1rem", fontSize: "2rem" }}>24hour high: {coin.market_data.high_24h.usd}</h3>
                <h3 style={{ color: "red", margin: "0 1rem", fontSize: "2rem" }}>24hour low: {coin.market_data.low_24h.usd}</h3>
              </div>
            </div>
        </div>
      );
    }
};
export default Charts;
