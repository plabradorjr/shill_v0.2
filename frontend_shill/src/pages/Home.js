import React, { useEffect } from 'react';
//REDUX
import { useDispatch, useSelector } from 'react-redux';
import {loadTrendingCryptos} from '../actions/cryptosAction';
//COMPONENTS
import Crypto from '../components/Crypto';
import CoinDetail from '../components/CoinDetails'
//STYLING AND ANIMATIONS
import styled from 'styled-components';
import {useLocation} from 'react-router-dom';


function Home() {
  //get the current location
  const location = useLocation();
  const pathId = location.pathname.split("/")[2];

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadTrendingCryptos());
  },[dispatch]);

  const trendingCryptoList = useSelector((state) => state.trendingCryptos.trending);

  return (
      <CryptoList className="container">
           {pathId && <CoinDetail />}
          <h2>Trending Searches from Coingecko</h2>
          <Cryptos >
            {trendingCryptoList.map((coin) => (
              <div>
                <Crypto 
                  name={coin.item.name} 
                  symbol={coin.item.symbol} 
                  image_url={coin.item.large}
                  key={coin.item.id}
                  id={coin.item.id}
                />
              </div>
            ))}
          </Cryptos>
      </CryptoList>
  )
}

const CryptoList = styled.div`
  h2 {
    padding: 1rem 0rem;
  }
`

const Cryptos = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  grid-column-gap: 2rem;
  grid-row-gap: 1rem;
  cursor: pointer;
`

export default Home;