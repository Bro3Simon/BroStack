import React, { Component } from 'react';

class GuessNumber extends Component {
    render() {
        return (
            <div className="row flex-column align-items-center hidden" id="guessNumber">
                <p className="mb-md-1 mb-0">Now it's your turn! Try to guess my number.</p>
                <p className="pt-md-1 pt-0 mt-md-1 mt-0">I am thinking of a number between 1 - 10</p>
                <small className="text-danger hidden" id="validateGuess">Please enter a number between 1 - 10</small>
                <input className="form-control col-lg-1 col-2 mt-2 mb-3" id="userGuess" type="number" min="1" max="10" />
            </div>
        );
    }
}

export default GuessNumber;