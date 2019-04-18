import React, { Component } from 'react';
import Buttons from './Buttons';
import Displays from './Displays';

class Projects extends Component {
    render() {
        return (
            <section id="projects" className="text-center">

                <div className="container">
                    <h2 className="mb-4 font-weight-bold">My Projects</h2>
                    <Buttons />

                    <div id="projectDisplay">
                        <Displays />                        
                    </div>

                </div>

            </section>
        );
    }
}

export default Projects;