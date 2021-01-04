import React from 'react';
//Styling and animations
import styled from 'styled-components';
import {motion} from 'framer-motion';
//redux
import {useSelector} from 'react-redux';

const CoinDetail = () => {

    //data
    const detailedCoin = useSelector((state) => state.coin.detailedCoin);

    return(
        <CardShadow>
            <CardDetail>
                <div className="stats">
                    <div className="rating">
                        <h3>{detailedCoin.name}</h3>
                    </div>
                    <div className="info">
                        <h3>Price: ${detailedCoin.market_data.current_price.usd} (USD)</h3>
                    </div>
                </div>
                <div className="media">
                    <img src={detailedCoin.image.large}></img>
                </div>
            </CardDetail>
        </CardShadow>
    )
}

const CardShadow = styled(motion.div)`

    width: 100%;
    min-height: 100vh;
    overflow-y: scroll;
    background: rgba(0,0,0,0.6);
    position: fixed;
    top: 0;
    left: 0;

`;

const CardDetail = styled(motion.div)`

    width: 80%;
    border-radius: 1rem;
    padding: 2rem 20rem;
    background: white;
    position: absolute;
    left: 10%;
    color: black;

`;


export default CoinDetail;