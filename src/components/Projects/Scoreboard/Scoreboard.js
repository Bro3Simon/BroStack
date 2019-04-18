import React, { Component } from 'react';
import Header from './Header';
import Playerlist from './PlayerList';
import AddPlayerForm from './AddPlayerForm'
import CloseProject from '../CloseProject';
class Scoreboard extends Component {
    render() {
        return (
            <div className="row col-md-8 col-lg-6 justify-content-center hidden mx-auto m-2" id="scoreboard">
                <Header />
                <Playerlist />
                <AddPlayerForm />
                <CloseProject />
            </div>
        );
    }
}

export default Scoreboard;