import React, { Component } from 'react';
import QuoteGenerator from './QuoteGenerator/QuoteGenerator';
import NumberGuesser from './NumberGuesser/NumberGuesser';
import GifSearch from './GifSearch/GifSearch';
import ButtonAnimation from './ButtonAnimation/ButtonAnimation';
import Scoreboard from './Scoreboard/Scoreboard';

class Displays extends Component {
    render() {
        return (
            <React.Fragment>
                <QuoteGenerator />
                <NumberGuesser />
                <ButtonAnimation />
                <GifSearch />
                <Scoreboard />
            </React.Fragment>
        );
    }
}

export default Displays;