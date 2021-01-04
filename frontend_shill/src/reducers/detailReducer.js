const initialState = { detailedCoin: { 
                        name: [],
                        image:{
                            large:[]
                        },
                        market_data:{
                            current_price:{
                                usd:[]
                            }}
                        },
                        isLoading: true,
                    }

const detailReducer = (state = initialState, action ) => {
    switch(action.type){
        case "GET_DETAIL":
            return {
                ...state,
                detailedCoin: action.payload.detailedCoin,
                isLoading: false,
            };
        case "LOADING_DETAIL":
            return {
                ...state,
                isLoading: true,
            }
        default:
            return {...state}
    }
}

export default detailReducer;