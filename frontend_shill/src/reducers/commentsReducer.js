const baseState = {
    comments: []
}

const commentsReducer = (state = baseState, action) => {
    switch(action.type){
        case "FETCH_COMMENTS":
            return {
                ...state,
                comments: action.payload
            }
        default:
            return {...state}
    }
}

export default commentsReducer;