import React from 'react';
import {Link} from 'react-router-dom';
import PostComment from '../components/PostComment';
import ShowComments from '../components/ShowComments';

const Comments = () => {

    return (
        <div className="container">
            <div className="row">
                <Link to="/">Back to Home</Link>
                <ShowComments />
                <div className="col-2"></div>
                <div className="col-8">
                    <PostComment />
                </div>
                <div className="col-2"></div>
            </div>
        </div>
    )
}

export default Comments;