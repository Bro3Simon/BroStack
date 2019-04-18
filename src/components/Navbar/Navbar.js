import React, { Component } from 'react';
import LogoBrand from './LogoBrand';
import Hamburger from './Hamburger';
import Navigation from './Navigation';


class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-sm bg-dark navbar-dark fixed-top">
                <LogoBrand />
                <Hamburger />
                <Navigation />
            </nav>
        );
    }
}

export default Navbar;
