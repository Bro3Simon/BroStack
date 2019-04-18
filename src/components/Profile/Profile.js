import React, { Component } from 'react';
import Summary from './Summary';
import Skills from './Skills/Skills';

class Profile extends Component {
  render() {
    return (
      <section className="text-center container" id="profile">
        <Summary />
        <Skills />
      </section>
    );
  }
}

export default Profile;