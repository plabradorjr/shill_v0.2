import React, { useEffect } from 'react';
//REDUX
import { useDispatch, useSelector } from 'react-redux';
import {loadTrendingCryptos, loadAllCoins, deleteSearchResults} from '../actions/cryptosAction';
//COMPONENTS
import Crypto from '../components/Crypto';
import CoinDetail from '../components/CoinDetails';
import TradingView from '../components/TradingView';
import NavBar from '../components/NavBar';
import Search from '../components/Search';
//STYLING AND ANIMATIONS
import styled from 'styled-components';
import {useLocation, Link} from 'react-router-dom';
import bag from '../images/bag.png'

function Home() {
  //get the current location
  const location = useLocation();
  const pathId = location.pathname.split("/")[2];

  const dispatch = useDispatch();
  const {trending, allCoins} = useSelector((state) => state.trendingCryptos);

  useEffect(() => {
    dispatch(loadTrendingCryptos());
    if (allCoins.length < 1) dispatch(loadAllCoins());
  },[dispatch, allCoins]);

  const deleteSearch = () => {
    dispatch(deleteSearchResults());
  }


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
              {trending.map((coin) => (
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
      <div className="container pt-5" id="tradingview">
        <div className="row">
          <ChartStyled >
              <h2>Bitcoin</h2>
              <TradingView ticker={"COINBASE:BTCUSD"} />
           </ ChartStyled>
          <ChartStyled >
            <h2>Ethereum</h2>
            <TradingView ticker={"COINBASE:ETHUSD"} />
          </ ChartStyled>
        </div>
        <div className="container">
        <div className="row">
          <div className="col">
            <div className="text-center">
              <img src={bag} alt="baby yoda" className="mx-auto img-thumbnail/"></img>
                    <button className="btn btn-outline-light">r/wallstreetbets Bags</button>
            </div>
          </div>
          <div className="col">
            <div className="text-center">
              <img src={bag} alt="baby yoda" className="mx-auto img-thumbnail/"></img>
                    <Link to="/bag/chamath"><button className="btn btn-outline-light">Chamath Bags</button></Link>
            </div>
          </div><div className="col">
            <div className="text-center">
              <img src={bag} alt="baby yoda" className="mx-auto img-thumbnail/"></img>
                    <button className="btn btn-outline-light">10X Baggers</button>
            </div>
          </div><div className="col">
            <div className="text-center">
              <img src={bag} alt="baby yoda" className="mx-auto img-thumbnail/"></img>
                    <button className="btn btn-outline-light">Vaccine Bags</button>
            </div>
          </div>
        </div>
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

const ChartStyled = styled.div`
  width: 50%;
  height: 500px;
  margin-bottom: 200px;
  margin-top: 50px;
`

export default Home;