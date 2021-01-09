import React, { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import {useLocation} from 'react-router-dom';
//styles

const PostComment = () => {

    const dispatch = useDispatch();
    const [textInput, setTextInput] = useState("");

    const inputHandler = (e) => {
        setTextInput(e.target.value);
    };


    const submitSearch = (e) => {
        e.preventDefault();
        console.log(textInput);
        
        setTextInput("");
    };

    return (
        <div className="container">
            <div className="row"> 
                <div className="col-12">
                    <form onSubmit={submitSearch} className="input-group mb-3" >
                        <input 
                            onChange={inputHandler}
                            value={textInput}
                            type="text" 
                            className="form-control" 
                            aria-describedby="basic-addon2">
                        </input>
                        <div  className="input-group-append">
                            <button className="btn btn-outline-secondary" type="submit" >Submit Comment</button>
                        </div>
                    </form>
                </div>
                
            </div>
          
        </div>
    )

}



export default PostComment;