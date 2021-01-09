import React from 'react';
import {Link} from 'react-router-dom';
import PostComment from '../components/PostComment';



const Comments = () => {


    return (
        <div>
            <Link to="/">Back to Home</Link>
            <br></br>
            <PostComment />
        </div>
    )
   
}

export default Comments;