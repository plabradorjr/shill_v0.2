import {combineReducers} from 'redux';
import cryptosReducer from './cryptosReducer';
import detailReducer from './detailReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers({
    trendingCryptos: cryptosReducer,
    coin: detailReducer,
    userReducer
})

export default rootReducer;