const initState = {
    name: "",
    image_url: "",
    is_logged: false,
    twitter_link: ""
}

const userReducer = (state = initState, action) => {
    switch(action.type){
        case "LOGIN_USER":
            return {...state}
        default:
            return {...state}
    }
}