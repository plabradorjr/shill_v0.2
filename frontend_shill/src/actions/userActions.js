import axios from 'axios';


export const fetchCurrentUser = () => async (dispatch) => {

    const currentUser = await axios.get("http://localhost:3030/logged_in", { withCredentials: true })

    dispatch({
        type: "FETCH_CURRENT_USER",
        payload: {
            currentUser: currentUser.data,
        }
    })

}

export const logoutUser = () => async (dispatch) => {

    await axios.delete("http://localhost:3030/logout", { withCredentials: true });
    
    dispatch({
        type: "LOGOUT"
    })

}