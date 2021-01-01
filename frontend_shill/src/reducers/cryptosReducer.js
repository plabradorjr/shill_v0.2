const initState = {
    trending: [],
    searched: []
}

const cryptosReducer = (state = initState, action) => {
    switch(action.tyep){
        case "FETCH_TRENDING":
            return {...state}
        default:
            return {...state}
    }
}

export default cryptosReducer;