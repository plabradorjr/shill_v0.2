import React from 'react';
// import {Link} from 'react-router-dom';
import PostComment from '../components/PostComment';
import ShowComments from '../components/ShowComments';
import NavBar from '../components/NavBar';

const Comments = () => {

    return (
        <>
        <NavBar />
        <div className="container">
            <div className="row">
                <ShowComments />
            </div>
            <div className="row">
                    <div className="col m-5 p5">
                        <PostComment />
                    </div>
            </div>
        </div>
        </>
    )
}

export default Comments;