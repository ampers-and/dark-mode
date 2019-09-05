import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import axios from "axios";

import {BrowserRouter as Router} from 'react-router-dom';
import {Route} from 'react-router-dom';
import SpecificChart from './components/SpecificChart';
import TabNav from './components/TabNav';
import Home from './components/Home';
import 'semantic-ui-css/semantic.min.css'

import Charts from "./components/Charts";
import Navbar from "./components/Navbar";

import "./styles.scss";

const App = () => {
  const [coinData, setCoinData] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=true"
      )
      .then(res => setCoinData(res.data))
      .catch(err => console.log(err));
  }, []);
  return (
    <div className="App">
      <Navbar />
      <TabNav coinData = {coinData} />
      {/* <Route exact path="/" component ={Home}/> */}
      <Route exact path="/" render={(props) => <Home {...props} coinData={coinData}/>}/>
      <Route path="/charts/:id" render={(props) => <SpecificChart {...props}/>}/>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<Router><App /></Router>, rootElement);
