import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import { 
  BrowserRouter as Router, 
  Route, 
  Switch, 
  useHistory,
} from 'react-router-dom';

import Charts from "./components/Charts";
import Navbar from "./components/Navbar";
import CoinDetails from "./components/CoinDetails";

import 'bootstrap/dist/css/bootstrap.min.css';
import "./styles.scss";

const App = () => {
  const [coinData, setCoinData] = useState([]);
  const [coinId, setCoinId] = useState(null);
  const history = useHistory();

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=true"
      )
      .then(res => setCoinData(res.data))
      .catch(err => console.log(err));
  }, []);

  useEffect(() => {
    if(coinId) {
      history.push("/coin");
    }
  }, [coinId, history]);


  const getCoinDetails = id => {
    setCoinId(id);
  }

  return (
    <div className="App">
      <Switch>
        <Route path="/coin">
          <CoinDetails id={coinId}/>
        </Route>
        <Route path="/">
          <Navbar getCoinDetails={getCoinDetails}/>
          <Charts coinData={coinData} />
        </Route>
      </Switch>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<Router><App /></Router>, rootElement);
