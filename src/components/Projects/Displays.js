import React, { Component } from 'react';
import QuoteGenerator from './QuoteGenerator/QuoteGenerator';
import NumberGuesser from './NumberGuesser/NumberGuesser';
import ButtonAnimation from './ButtonAnimation/ButtonAnimation';
import Scoreboard from './Scoreboard/Scoreboard';
import SearchFlickr from './SearchFlickr/SearchFlickr';

class Displays extends Component {
    render() {
        return (
            <React.Fragment>
                <QuoteGenerator />
                <NumberGuesser />
                <ButtonAnimation />
                <SearchFlickr />
                <Scoreboard />
            </React.Fragment>
        );
    }
}

export default Displays;