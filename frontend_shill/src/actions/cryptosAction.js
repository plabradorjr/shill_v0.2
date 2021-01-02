import axios from "axios";
import {trendingCryptosURL} from "../api";
import {coinDetailsURL} from '../api'

export const loadTrendingCryptos = () => async (dispatch) => {

    const trendingCryptos = await axios.get(trendingCryptosURL());

    dispatch({
        type: "FETCH_TRENDING",
        payload: {
            trending: trendingCryptos.data.coins
        }
    })

}