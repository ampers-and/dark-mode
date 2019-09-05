import React from 'react';
import styled from 'styled-components'


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

export default function Home(){

    return(
        <div className='home'>
            <Title>Welcome to Crypto Tracker!</Title>
            <SubTitle>‘Powered by CoinGecko API’</SubTitle>
            <Par>Click through the currency symbols above to load the crypto-currency vs USD charts for the last week.</Par>
        </div>
    )
}