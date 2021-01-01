import {combineReducers} from 'redux';
import cryptosReducer from './cryptosReducer';
import detailReducer from './detailReducer';

const rootReducer = combineReducers({
    cryptos: cryptosReducer,
    detail: detailReducer
})

export default rootReducer;