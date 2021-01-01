import {combineReducers} from 'redux';
import cryptosReducer from './cryptosReducer';

const rootReducer = combineReducers({
    cryptos: cryptosReducer,
})

export default rootReducer;