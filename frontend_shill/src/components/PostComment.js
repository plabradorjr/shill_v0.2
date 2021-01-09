import React, { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import {useLocation} from 'react-router-dom';
import axios from 'axios';
//styles

const PostComment = () => {

    const dispatch = useDispatch();
    const [textInput, setTextInput] = useState("");

    const inputHandler = (e) => {
        setTextInput(e.target.value);
    };


    const submitSearch = (e) => {
        
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
        
    };

    return (
        <div className="container">
            <div className="row"> 
                <div className="col-12">
                    <form onSubmit={submitSearch} className="input-group mb-3" >
                        <textarea 
                            onChange={inputHandler}
                            value={textInput}
                            type="text" 
                            className="form-control" 
                            aria-describedby="basic-addon2">
                        </textarea>
                        <div  className="input-group-append">
                            <button className="btn btn-outline-secondary btn-block p-4" type="submit" >Submit Comment</button>
                        </div>
                    </form>
                </div>
            </div>
          
        </div>
    )

}



export default PostComment;