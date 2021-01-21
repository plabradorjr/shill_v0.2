import React from 'react';

class Like extends React.Component {

    constructor(props){
        super(props);
            this.state = {
                upVote: 0,
                downVote: 0
            }
    }


    clickHandlerUpVote = () => {
        this.setState({
            upVote: this.state.upVote + 1
        });
    };

    clickHandlerDownVote = () => {
        this.setState({
            downVote: this.state.downVote + 1
        })
    }
    

    render() {
      return (
        <div>
            <button onClick={this.clickHandlerUpVote}>
                Up Vote +{this.state.upVote}
            </button>

            <button onClick={this.clickHandlerDownVote}>
                Down Vote -{this.state.downVote}
            </button>
        </div>
      )
    }

}

export default Like;