import React, { Component } from 'react';
import { Consumer } from '../Context';

class CloseProject extends Component {
    render() {
        return (
            // import data
            <Consumer>
                {({ actions }) => {
                    return (
                        <div className="row justify-content-center">
                            <button className="btn btn-danger mt-2 close-project" onClick={(event) => actions.closeProjectDisplay(event.target)}>X</button>
                        </div>
                    );
                }}
            </Consumer>
        );
    }
}

export default CloseProject;