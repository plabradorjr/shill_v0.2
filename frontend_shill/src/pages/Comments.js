import React from 'react';
import {Link} from 'react-router-dom';
import PostComment from '../components/PostComment';
import ShowComments from '../components/ShowComments';

const Comments = () => {

    return (
        <div>
            <Link to="/">Back to Home</Link>

            <PostComment />
            <ShowComments />
        </div>
    )
}

export default Comments;