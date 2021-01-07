import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import TrieSearch from 'trie-search';
import {loadSearchedCrypto} from '../actions/cryptosAction';

const Search = () => {

    const { allCoins, searched } = useSelector((state) => state.trendingCryptos)

    const dispatch = useDispatch();
    const [textInput, setTextInput] = useState("");

    const inputHandler = (e) => {
        setTextInput(e.target.value);
    };

    const ts = new TrieSearch('name');
    ts.addAll(allCoins);

    const showSearchResults = (results) => {
        
    }


    const submitSearch = (e) => {
        e.preventDefault();
        // console.log(textInput);
        let results = ts.get(textInput);
        console.log(results);
        
        dispatch(loadSearchedCrypto(results));
        setTextInput("");
    };

    


    return (
        <form onSubmit={submitSearch} className="input-group mb-3" id="srch">
            <input 
                onChange={inputHandler}
                value={textInput}
                type="text" 
                className="form-control" 
                aria-describedby="basic-addon2">
            </input>
            <div  className="input-group-append">
                <button className="btn btn-outline-secondary" type="submit" >Search Crypto</button>
            </div>
        </form>
    )

}

export default Search;