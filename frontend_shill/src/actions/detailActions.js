import axios from 'axios';
import {coinDetailsURL} from '../api';


export const loadCoinDetail = (id) => async (dispatch) => {
    const detailData = await axios.get(coinDetailsURL(id))

    dispatch({
        type: "GET_DETAIL",
        payload: {
            price: detailData.data.market_data.current_price.usd,
            twitter: detailData.data.links.twitter_screen_name
        }
    })
}

