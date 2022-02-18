import React, { Component } from 'react';
import { Consumer } from '../../Context';
import Card from './Card';
import CardFooter from './CardFooter';

class QuoteGenerator extends Component {
    render() {
        return (
            // import data
            <Consumer>
                {({ actions }) => {
                    return (
                        <div className="row justify-content-center fade-me hidden" id="quoteGenerator">

                            <h3 className="pt-md-5">Random Quote Generator</h3>

                            <div className="row justify-content-center">
                                <div className="col-8">
                                    <Card />
                                    <CardFooter />
                                </div>
                            </div>

                            <div className="row justify-content-center">
                                <button id="quoteNew" className="btn btn-dark mt-2 mr-1" onClick={() => actions.getQuote()}>New Quote</button>
                                <button className="btn btn-danger mt-2 ml-1 close-project" onClick={(event) => actions.closeProjectDisplay(event.target)}>X</button>
                            </div>

                        </div>
                    );
                }}
            </Consumer>
        );
    }
}

export default QuoteGenerator;