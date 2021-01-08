import React, { useEffect } from 'react';
//REDUX
import { useDispatch, useSelector } from 'react-redux';
import {loadTrendingCryptos, loadAllCoins, deleteSearchResults} from '../actions/cryptosAction';
//COMPONENTS
import Crypto from '../components/Crypto';
import CoinDetail from '../components/CoinDetails'
//STYLING AND ANIMATIONS
import styled from 'styled-components';
import {useLocation} from 'react-router-dom';
import Search from '../components/Search';
import NavBar from '../components/NavBar';


function Home() {
  //get the current location
  const location = useLocation();
  const pathId = location.pathname.split("/")[2];

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadTrendingCryptos());
    dispatch(loadAllCoins());
  },[dispatch]);

  const deleteSearch = () => {
    dispatch(deleteSearchResults());
  }

  const trendingCryptoList = useSelector((state) => state.trendingCryptos.trending);

  return (
      <>
      <NavBar />
      <div className="container">
        <br></br>
        <CryptoList className="row">
            {pathId && <CoinDetail />}
            <h2 onClick={deleteSearch}>Trending Searches</h2>
            <small className="text-white pb-4">* from CoinGecko API</small>
            <Cryptos >
              {trendingCryptoList.map((coin) => (
                <div key={coin.item.id}>
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
        <br></br>
        <div className="row">
          <Search />
        </div>
      </div>
      </>
  )
}

const CryptoList = styled.div`
  h2 {
    padding: 1rem 0rem;
    cursor: pointer;
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