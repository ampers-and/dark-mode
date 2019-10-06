import React from 'react';
import styled from 'styled-components'
import CardList from './CardList';
import ReactCardFlip from 'react-card-flip';

const Title = styled.h1`
    margin:40px auto 0;
`;

const SubTitle = styled.p`
    align-items:center;
    margin:20px 0 0 0;
`;

const Par = styled.h4`
    align-items:center;
    margin:20px;
`;

{/* export default function Home({coinData}){

    return(
        <div className='home'>
            <div className='top'>
                <Title>Welcome to Crypto Tracker!</Title>
                <SubTitle>‘Powered by CoinGecko API’</SubTitle>
                <Par>Click through the currency symbols above to load the crypto-currency vs USD charts for the last week.</Par>
            </div>
            <CardList coinData={coinData} />
        </div>
    )
} */}

//Card Flip

class Home extends React.Component {
    constructor() {
      super();
        this.state = {
        isFlipped: false
      };
      this.handleClick = this.handleClick.bind(this);
    }
   
    handleClick(e) {
      e.preventDefault();
      this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
    }
   
    render() {
      return (
        <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="vertical">
          <YOUR_FRONT_CCOMPONENT key="front">
            This is the front of the card.
            <button onClick={this.handleClick}>Click to flip</button>
          </YOUR_FRONT_CCOMPONENT>
   
          <YOUR_BACK_COMPONENT key="back">
            This is the back of the card.
            <button onClick={this.handleClick}>Click to flip</button>
          </YOUR_BACK_COMPONENT>
        </ReactCardFlip>
      )
    }
  }