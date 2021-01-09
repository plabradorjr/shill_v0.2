import axios from 'axios';

export const fetchComments = () => async (dispatch) => {

    const allComments = await axios.get("http://localhost:3030/comments")

    dispatch({
        type: "FETCH_COMMENTS",
        payload: {
            comments: allComments.data
        }
    })
}