import React from 'react';
//Styling and animations
import styled from 'styled-components';
import {motion} from 'framer-motion';
//redux
import {useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom';
import PriceChart from './PriceChart';

const CoinDetail = () => {

    const history = useHistory();

    //exit detail
    const exitDetailHandler = (e) => {
        document.getElementById("srch").classList.toggle("invisible");
        const element = e.target;
        if(element.classList.contains('shadow')){
            history.push('/')
        }
    }

    //data
    const {detailedCoin, isLoading, historicalData} = useSelector((state) => state.coin);

    return(
        <>{!isLoading && (
            
            <CardShadow className="shadow" onClick={exitDetailHandler}>
                <div className="container">
                    <CardDetail className="row mt-5 rounded p-3" >
                        <div>
                            <div className="stats">
                                <div className="rating">
                                    <h2>{detailedCoin.name}</h2>
                                </div>
                                <div className="info">
                                    <h3>Price: ${detailedCoin.market_data.current_price.usd} (USD)</h3>
                                </div>
                            </div>
                            <div className="media">
                                <img src={detailedCoin.image.large}></img>
                                <br></br>
                            </div>
                        </div>
                        
                        <PriceChart className="container" data={historicalData} />

                    </CardDetail>

                </div>
                
            </CardShadow>

        
        
        )}
        
        </>
    )
}

const CardShadow = styled.div`

    width: 100%;
    min-height: 100vh;
    overflow-y: scroll;
    background: #2f3542;
    position: fixed;
    top: 0;
    left: 0;

`;

const CardDetail = styled.div`

    background-color: #1e272e;

`;


export default CoinDetail;