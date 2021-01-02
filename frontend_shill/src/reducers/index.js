import {combineReducers} from 'redux';
import cryptosReducer from './cryptosReducer';
import detailReducer from './detailReducer';

const rootReducer = combineReducers({
    trendingCryptos: cryptosReducer,
    detailedCoin: detailReducer
})

export default rootReducer;