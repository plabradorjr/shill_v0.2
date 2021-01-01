import React, { useEffect } from 'react';
//REDUX
import { useDispatch, useSelector } from 'react-redux';
import {loadTrendingCryptos} from '../actions/cryptosAction';
//COMPONENTS
import Crypto from '../components/Crypto';
//STYLING AND ANIMATIONS
import styled from 'styled-components';
import {motion} from 'framer-motion';

function Home() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadTrendingCryptos());
  },[dispatch]);

  const trendingCryptoList = useSelector((state) => state.cryptos.trending);

  return (
      <CryptoList>
          <h2>Trending Searches from Coingecko</h2>
          <Cryptos>
            {trendingCryptoList.map((coin) => (
                <Crypto 
                  name={coin.item.name} 
                  symbol={coin.item.symbol} 
                  image_url={coin.item.large}
                  key={coin.item.id}
                  id={coin.item.id}
                />
            ))}
          </Cryptos>
      </CryptoList>
  )
}

const CryptoList = styled(motion.div)`
  padding: 0rem 5rem;
  h2 {
    padding: 1rem 0rem;
  }
`

const Cryptos = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  grid-column-gap: 1rem;
  grid-row-gap: 1rem;
`

export default Home;