import React, { Component } from 'react';
import {Consumer} from '../../Context';
import PickNumber from './PickNumber';
import GuessNumber from './GuessNumber';

class NumberGuesser extends Component {
    render() {
        return (
            // import data
            <Consumer>
                {({ actions }) => {
                    return (
                        <div className="row flex-column justify-content-center hidden m-2" id="numberGuesser">

                            <h3 className="pt-md-5" id="numberGuesserHeader">Number Guesser</h3>

                            <PickNumber />

                            <div className="col-12 mt-3 hidden" id="pickNumberResults">
                            </div>

                            <GuessNumber />

                            <div className="col-12 mt-3 hidden" id="guessNumberResults">
                            </div>

                            <div className="row justify-content-center">
                                <button className="btn btn-dark mt-2 mr-1" id="submitNumber" tabIndex="0" onClick={(event) => actions.handleNumberGuesser(event.target)}>Submit</button>
                                <button className="btn btn-dark mt-2 mr-1 hidden" id="next" tabIndex="0" onClick={(event) => actions.handleNumberGuesser(event.target)}>Next</button>
                                <button className="btn btn-dark mt-2 mr-1 hidden" id="submitGuess" tabIndex="0" onClick={(event) => actions.handleNumberGuesser(event.target)}>Submit</button>
                                <button className="btn btn-dark mt-2 mr-1 hidden" id="playAgain" tabIndex="0" onClick={(event) => actions.handleNumberGuesser(event.target)}>Play Again</button>
                                <button className="btn btn-danger mt-2 ml-1 close-project" id="closeNumber" tabIndex="0" onClick={(event) => actions.closeProjectDisplay(event.target)}>X</button>
                            </div>

                        </div>
                    );
                }}
            </Consumer>
        );
    }
}

export default NumberGuesser;