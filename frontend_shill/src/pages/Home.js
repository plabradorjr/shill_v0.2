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
  console.log(trendingCryptoList)
  return (
      <CryptoList>
          <h2>Trending Searches from Coingecko</h2>
          <Cryptos>
            {trendingCryptoList.map((coin) => (
                <Crypto name={coin.item.name} symbol={coin.item.symbol} image_url={coin.item.large}/>
            ))}
          </Cryptos>
      </CryptoList>
  )
}

const CryptoList = styled(motion.div)`

`

const Cryptos = styled.div`

`

export default Home;