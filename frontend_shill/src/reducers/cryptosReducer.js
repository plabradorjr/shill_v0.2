const initState = {
    trending: [],
    allCoins: [],
    searched: []
}

const cryptosReducer = (state = initState, action) => {
    switch(action.type){
        case "FETCH_TRENDING":
            return {...state,
                trending: action.payload.trending
            }
        case "FETCH_ALL_COINS":
            return {...state,
                allCoins: action.payload.allCoins
            }
        case "FETCH_SEARCHED":
            return {
                ...state,
                searched: action.payload.searched
            }
        default:
            return {...state}
    }
}

export default cryptosReducer;