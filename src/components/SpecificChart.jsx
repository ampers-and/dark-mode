import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Chart from './Chart'

export default function SpecificChart(props) {

  const [coin, setCoin] = useState();
 
  useEffect(() => {
    const id =  props.match.params.id;

       axios
        .get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${id}&order=market_cap_desc&per_page=10&page=1&sparkline=true`)
        .then(response => {
          setCoin(response.data[0]);
        })
        .catch(error => {
          console.log(error);
        });

  },[props]);

  if (!coin) {
    return <div>Loading coin information...</div>;
  }

  return (
    <div className="charts">
        <div className="chart__container" key={coin.name}>
          <h2 className="coin__title">{coin.name}</h2>
          <h4 className="coin__symbol">{coin.symbol}</h4>
          <div className="coin__logo">
            <img src={coin.image} height="40" alt={coin.name} />
          </div>
          <Chart sparklineData={coin.sparkline_in_7d.price} />
        </div>
    </div>
  );
}
