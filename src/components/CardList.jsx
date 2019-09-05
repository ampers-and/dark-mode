import React from 'react';
import { Card, Icon, Image } from 'semantic-ui-react'
import { FaHashtag } from "react-icons/fa";

export default function CardList({coinData}) {

    return(
        <section className="character-list grid-view">
            {coinData.map(coin => (
                <Card>
                <Image src={coin.image} wrapped ui={false} />
                <Card.Content>
                  <Card.Header>{coin.name}</Card.Header>
                  <Card.Meta>
                    <span className='date'>{coin.symbol}</span>
                  </Card.Meta>
                  <Card.Description>
                    Current Price: ${coin.current_price}
                  </Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <Icon><FaHashtag/></Icon>
                    
                     Market Cap Rank: {coin.market_cap_rank}
                </Card.Content>
              </Card>
            ))}
        </section>
    )
}