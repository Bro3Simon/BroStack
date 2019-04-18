import React, { Component } from 'react';

class Hamburger extends Component {
    render() {
        return (
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#menu" aria-controls="menu"
                aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
        );
    }
}

export default Hamburger;