import React, { useState } from 'react';
import {fetchComments} from '../actions/commentsAction';
import { useDispatch } from "react-redux";
import axios from 'axios';
//styles

const PostComment = () => {

    const dispatch = useDispatch();
    const [textInput, setTextInput] = useState("");

    const inputHandler = (e) => {
        setTextInput(e.target.value);
    };

    const handleSubmitClick = (e) => {
        
        if (textInput !== "") {
            axios
                .post(
                    "http://localhost:3030/comments",
                    {
                        comment: {
                            comment: textInput
                        }
                    },
                    { withCredentials: true }
                )
                .then(res => {
                    if (res.data.status === "success") {
                        console.log("comment went to rails woot")
                    }
                })
                .catch(err => {
                    console.log("posting comment error", err)
                });

            setTextInput("");
            e.preventDefault();
            setTimeout(() => {  dispatch(fetchComments()); }, 1500);
        } else {
            e.preventDefault();
        }
        
    };

    return (
        <div className="container">
            <div className="row"> 
                <div className="col-12">
                    <form onSubmit={handleSubmitClick} className="input-group mb-3" >
                        <input 
                            onChange={inputHandler}
                            value={textInput}
                            type="text" 
                            className="form-control" 
                            aria-describedby="basic-addon2">
                        </input>
                        <div  className="input-group-append">
                            <button className="btn btn-warning btn-block" type="submit" >Submit Comment</button>
                        </div>
                    </form>
                </div>
            </div>
          
        </div>
    )

}

export default PostComment;