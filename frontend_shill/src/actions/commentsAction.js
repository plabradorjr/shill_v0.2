// import axios from 'axios';
// note to self, if not using axios, you need to delete ".data" on the payload dispatch

export const fetchComments = () => async (dispatch) => {

    // const allComments = await axios.get("http://localhost:3030/comments")

    const allComments = await fetch("http://localhost:3030/comments").then(res => res.json())

    dispatch({
        type: "FETCH_COMMENTS",
        payload: {
            comments: allComments
        }
    })
}