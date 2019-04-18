import React, { Component } from 'react';
import { Consumer } from '../Context';

class Buttons extends Component {
    render() {
        return (
            // import data
            <Consumer>
                {({ actions, Projects }) => {
                    return (
                        <div id='projectNav' className="row justify-content-around">

                            <ul className="navbar justify-content-center list-unstyled col-12">

                                {/* Create a button for every item in the list */}
                                {Projects.map((project, index) =>
                                    <li key={index} className="m-2">
                                        {/* Show the 4th button only on large screens because that project doesn't work on mobile */}
                                        <button className={`btn btn-warning ${index === 3 ? "d-none d-lg-block" : null}`} id={project.nav.id} onClick={(event) => actions.toggleProjectDisplay(event.target)}>{project.nav.button}
                                            <a id={project.nav.link} href={project.nav.href} tabIndex="-1"> </a>
                                            {/* Add a anchor to the first item in the list that links to projects for smooth scrolling back to projects when closing a project display */}
                                            {index === 0 ? <a id="projectLink" href="#projects" tabIndex="-1"> </a> : null}
                                        </button>
                                    </li>
                                )}

                            </ul>

                        </div>
                    );
                }}
            </Consumer>
        );
    }
}

export default Buttons;