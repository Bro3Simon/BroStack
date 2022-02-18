import React, { Component } from 'react';

class Navigation extends Component {
    render() {
        return (
                    <div className="collapse navbar-collapse justify-content-end" id="menu">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link no-click" href="#profile">My Profile</a>
                                <a className="nav-link click" href="#profile">My Profile</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link no-click" href="#projects">My Projects</a>
                                <a className="nav-link click" href="#projects">My Projects</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link no-click" href="#photography">My Photography</a>
                                <a className="nav-link click" href="#photography">My Photography</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link no-click" href="#contact">Contact</a>
                                <a className="nav-link click" href="#contact">Contact</a>
                            </li>
                        </ul>
                    </div>
        );
    }
}

export default Navigation;