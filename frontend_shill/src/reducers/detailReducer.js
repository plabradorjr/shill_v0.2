const initialState = { price: {} }

const detailReducer = (state = initialState, action ) => {
    switch(action.type){
        case "GET_DETAIL":
            return {...state,
                price: action.payload.price,
                twitter: action.payload.twitter,
                }
        default:
            return {...state}
    }
}

export default detailReducer;