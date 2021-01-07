import axios from "axios";
import { allCoinsURL, trendingCryptosURL } from "../api";

export const loadTrendingCryptos = () => async (dispatch) => {

    const trendingCryptos = await axios.get(trendingCryptosURL());

    dispatch({
        type: "FETCH_TRENDING",
        payload: {
            trending: trendingCryptos.data.coins
        }
    })
}


export const loadAllCoins = () => async (dispatch) => {

    const allCoins = await axios.get(allCoinsURL());

    dispatch({
        type: "FETCH_ALL_COINS",
        payload: {
            allCoins: allCoins.data
        }
    })
}

export const loadSearchedCrypto = (res) => (dispatch) =>{

    dispatch({
        type: "UPDATE_SEARCH_RESULTS",
        payload: {
            searched: res
        }
    })

}
