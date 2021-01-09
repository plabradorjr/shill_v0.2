import React, { useEffect } from 'react';
//REDUX
import { useDispatch, useSelector } from 'react-redux';
import {fetchComments} from '../actions/commentsAction';
//COMPONENTS
//STYLING AND ANIMATIONS
import styled from 'styled-components';

const ShowComments = () => {

    const dispatch = useDispatch();
    const {comments} = useSelector((state) => state.commentsReducer);
    console.log(comments)

    useEffect(() => {
        dispatch(fetchComments());
    },[dispatch]);

    return (
        <div>showing comments components</div>
    )

} 

export default ShowComments;