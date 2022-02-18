import React, { Component } from "react";

class LogoBrand extends Component {
  render() {
    return (
      <React.Fragment>
        <a className="pr-3" href="#pageTop">
          <img id="logo" src="images/logo.png" alt="BroStack" />
        </a>
        <a className="navbar-brand" href="#pageTop">
          BroStack
        </a>
      </React.Fragment>
    );
  }
}

export default LogoBrand;
