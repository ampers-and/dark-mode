import React from "react";
import styled from 'styled-components'
import { NavLink } from "react-router-dom";
import { FaHome } from "react-icons/fa";

const Nav = styled.div`
    display:flex;
    justify-content:space-around;
    align-items:center;
    margin:20px;
`;

const Subtitle = styled.p`
    text-decoration:none;
    color:darkgray;
    margin-top:10px;
    font-size:1.2rem;
`;

  export default function TabNav({coinData}) {

  return (
    <div>
      <Nav>
        <div>
          <NavLink to="/">
          <FaHome size='50' color='darkgray' />
          <Subtitle>Home</Subtitle>
         </NavLink>
        </div>
        
        {coinData.map(coin => (
            <div>
                <NavLink to = {`/charts/${coin.id}`}>
                    <div className="coin__logo">
                        <img src={coin.image} height="30" alt={coin.name} />
                    </div>
                    <Subtitle>{coin.symbol}</Subtitle>
                </NavLink>
            </div>
        ))}
      </Nav>
    </div>
  );
};

