const initialState = { coin: {} }

const detailReducer = (state = initialState, action ) => {
    switch(action.type){
        case "GET_DETAIL":
            return {...state, coin: action.payload.coin}
        default:
            return {...state}
    }
}

export default detailReducer;