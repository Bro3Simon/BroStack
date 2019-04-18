import React, { Component } from 'react';

class Welcome extends Component {
    render() {
        return (
            <section className="jumbotron jumbotron-fluid d-flex flex-column justify-content-center text-white-50" id="about">
                <div className="row container-fluid load-hidden" id="myName">
                    <div className="col-12 pl-3">
                        <h1 className="display-1">My Name is <span className="text-white">Simon</span></h1>
                    </div>
                </div>
                <div className="row container-fluid">
                    <div className="col-lg-5 col-xs-12 load-hidden" id="Iam">
                        <p className="lead">and I am a <span className="text-warning">Frontend Developer</span></p>
                    </div>
                </div>
            </section>
        );
    }
}

export default Welcome;