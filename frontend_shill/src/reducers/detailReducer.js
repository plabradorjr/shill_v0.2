const initialState = { detailedCoin: [] }

const detailReducer = (state = initialState, action ) => {
    switch(action.type){
        case "GET_DETAIL":
            return {...state, detailedCoin: action.payload.detailedCoin}
        default:
            return {...state}
    }
}

export default detailReducer;