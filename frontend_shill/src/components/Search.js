import React, { Component } from 'react';


class Search extends Component {
    constructor(props){
        super(props);

        this.state= {
            query: ""
        }
    }


    inputHandler = (e) => {
        this.setState({
            query: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state.query)
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} className="input-group mb-3" id="srch">
                <input 
                    onChange={this.inputHandler}
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

}

export default Search;