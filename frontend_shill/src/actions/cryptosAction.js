import axios from "axios";
import {trendingCryptosURL} from "../api";

export const loadCryptos = () => async (dispatch) => {

    const trendingCryptos = await axios.get(trendingCryptosURL());

    dispatch({
        type: "FETCH_TRENDING",
        payload: {
            trending: trendingCryptos.data.coins
        }
    })

}