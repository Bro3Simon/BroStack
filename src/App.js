import React, { Component } from 'react';
import { Helmet } from 'react-helmet';

import Navbar from './components/Navbar/Navbar';
import Welcome from './components/Welcome';
import Profile from './components/Profile/Profile';
import Photography from './components/Photography';
import Contact from './components/Contact';
import Projects from './components/Projects/Projects';

class App extends Component {
  render() {
    return (
      <div id="pageTop">
        <Helmet>
          <script src="./js/main.js" type="text/javascript" />
        </Helmet>
        <header>
          <Navbar />
          <Welcome />
        </header>
        <main>
          <Profile />
          <Projects />
          <Photography />
          <Contact />
        </main>
      </div>
    );
  }
}

export default App;
