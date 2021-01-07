import React from 'react';



const Search = () => {

    return (
        <div className="input-group mb-3" id="srch">
            <input 
                type="text" 
                className="form-control" 
                placeholder="" 
                aria-describedby="basic-addon2">
            </input>
            <div className="input-group-append">
                <button className="btn btn-outline-secondary" type="button">Search Crypto</button>
            </div>
        </div>
    )
}

export default Search;