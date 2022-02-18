import React, { Component } from 'react';

class Contact extends Component {
    render() {
        return (
            <section className="mb-5" id="contact">

                <div className="container">

                    <h2 className="mb-4 font-weight-bold text-center">Contact Me</h2>

                    <form action="php/contact_form_handler.php" method="post">

                        <div className="form-group row">
                            <i className="fa fa-user fa-2x text-warning col-sm-1 col-2"></i>
                            <label className="col-md-2 col-sm-4 col-5 col-form-label" htmlFor="input-1">Your Name</label>
                            <input className="form-control col-sm-4 col-10 ml-sm-0 ml-2" type="text" id="input-1" placeholder="John Smith" name="name" required />
                        </div>

                        <div className="form-group row mb-0">
                            <i className="fa fa-envelope fa-2x text-warning col-sm-1 col-2"></i>
                            <label className="col-md-2 col-sm-4 col-5 col-form-label" htmlFor="input-2">Your Email</label>
                            <input className="form-control col-md-4 col-sm-5 col-10 ml-sm-0 ml-2" type="email" id="input-2" placeholder="JohnSmith@example.com" aria-describedby="emailHelp" name="email" required />
                        </div>
                        <div className="row mb-3">
                            <div className="col-md-3 col-sm-5"></div>
                            <small className="form-text text-muted col-sm-7 col-10" id="emailHelp">I'll never share your email with anyone else.</small>
                        </div>

                        <div className="form-group row">
                            <i className="fa fa-tag fa-2x text-warning col-sm-1 col-2"></i>
                            <label className="col-md-2 col-sm-4 col-4 col-form-label" htmlFor="input-3">Subject</label>
                            <input className="form-control col-sm-4 col-10 ml-sm-0 ml-2" type="text" id="input-3" placeholder="I want to hire you!" name="subject" required />
                        </div>

                        <div className="form-group row">
                            <i className="fa fa-pen fa-2x text-warning col-sm-1 col-2"></i>
                            <label className="col-md-2 col-sm-4 col-4 col-form-label" htmlFor="input-4">Message</label>
                            <textarea className="form-control col-md-9 col-sm-7 col-11 ml-sm-0 ml-2" type="text" id="input-4" placeholder="Type your message here..." rows="8" name="message" required></textarea>
                        </div>

                        <div className="text-right">
                            <button className="btn btn-primary col-4 mr-sm-0 mr-3" type="submit" name="submit">Send<i className="fa fa-paper-plane ml-2"></i></button>
                        </div>

                    </form>

                </div>

            </section>
        );
    }
}

export default Contact;