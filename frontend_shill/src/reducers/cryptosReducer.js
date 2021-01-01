const initState = {
    trending: [],
    searched: []
}

const cryptosReducer = (state = initState, action) => {
    switch(action.type){
        case "FETCH_TRENDING":
            return {...state, trending: action.payload.trending}
        default:
            return {...state}
    }
}

export default cryptosReducer;