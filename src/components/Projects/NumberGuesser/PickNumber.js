import React, { Component } from 'react';

class PickNumber extends Component {
    render() {
        return (
            <div className="row flex-column align-items-center" id="pickNumber">
                <p>Let's play a game! First, I will try to guess your number.</p>
                <p>Pick a number between 1 - 1,000</p>
                <small className="text-danger hidden" id="validateNumber">Please enter a number between 1 - 1,000</small>
                <input className="form-control col-lg-1 col-2 mt-2 mb-3" id="userNumber" type="password" />
            </div>
        );
    }
}

export default PickNumber;