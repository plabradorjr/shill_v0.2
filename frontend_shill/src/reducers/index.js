import {combineReducers} from 'redux';
import cryptosReducer from './cryptosReducer';
import detailReducer from './detailReducer';

const rootReducer = combineReducers({
    trendingCryptos: cryptosReducer,
    coin: detailReducer
})

export default rootReducer;