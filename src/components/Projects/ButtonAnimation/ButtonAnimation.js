import React, { Component } from 'react';
import CloseProject from '../CloseProject';

class ButtonAnimation extends Component {
    render() {
        return (
            <div className="row justify-content-center hidden" id="buttonAnimation">

                <h3 className="pt-md-5">Button Hover Animation</h3>
                <small className="d-lg-none">Mimic a hover action on mobile device by long pressing over the button.</small>

                <div className="row justify-content-center mt-5">
                    <button className="btn btn-light draw-border btn-1 m-1"><span>Hover Me</span></button>
                    <button className="btn btn-light draw-border btn-2 m-1"><span>Hover Me</span></button>
                    <button className="btn btn-light draw-border btn-3 m-1"><span>Hover Me</span></button>
                    <button className="btn btn-light draw-border btn-4 m-1"><span>Hover Me</span></button>
                    <button className="btn btn-light draw-border btn-5 m-1"><span>Hover Me</span></button>
                    <button className="btn btn-light draw-border btn-6 m-1"><span>Hover Me</span></button>
                </div>

                <CloseProject />

            </div>
        );
    }
}

export default ButtonAnimation;