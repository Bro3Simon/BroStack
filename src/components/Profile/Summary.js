import React, { Component } from 'react';

class Summary extends Component {
    render() {
        return (
            <div className="load-hidden" id="profileSummary">
                <h2 className="mb-4 font-weight-bold">Profile Summary</h2>

                <div className="row mb-5 d-flex justify-content-center">

                    <div className="col-8 text-secondary">
                        Experienced business <abbr title="information technology">IT</abbr> professional described as, responsible, cooperative, quick-learning, motivated and possessing a diverse background. Has experience leading teams, developing information systems and software using various forms of the <abbr title="Software Development Life Cycle">SDLC</abbr> and creating data reports. Experiences include administration, supervising, quality assurance software testing, project management, business systems analysis, creating websites, organizing massive amounts of online content to create user friendly <abbr title="Graphic User Interface">GUI</abbr>, and user support.
                    </div>

                </div>
            </div>
        );
    }
}

export default Summary;