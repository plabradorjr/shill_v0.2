import axios from 'axios';
import {coinDetailsURL} from '../api';


export const loadCoinDetail = (id) => async (dispatch) => {

    dispatch({
        type: "LOADING_DETAIL",
    });

    const detailedCoinData = await axios.get(coinDetailsURL(id))

    dispatch({
        type: "GET_DETAIL",
        payload: {
            detailedCoin: detailedCoinData.data
        }
        
    })

}

