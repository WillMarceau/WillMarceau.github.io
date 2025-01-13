import './App.css'
import React from 'react';

// components
import NavBarContainer from './containers/navBarContainer';
import About from './components/About';
import Education from './components/Education';
import Projects from './components/Projects';
import DownloadContainer from './containers/downloadContainer';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import AccountLinksContainer from './containers/accountLinksContainer';

// icons
import GitHubIcon from '@mui/icons-material/GitHub';

function App() {

  return (
    <div className="split">
      <div className="left montserrat-light">
        <h1 className="montserrat-bold name">Will Marceau</h1>
        <h3 className="field">Computer Science Undergrad</h3>
        <h4 className="phone montserrat-light">Phone: (512) 952-1090</h4>
        <h4 className="email montserrat-light">Email: willfmarceau@gmail.com</h4>
        {/*<h6 className="links montserrat-light">Github | LinkedIn</h6> */}
        <AccountLinksContainer />
        <NavBarContainer />
        <DownloadContainer />
      </div>
      <div className="right montserrat-light">
        <About />
        <Education />
        <Projects />
      </div>
    </div>
  );
}

export default App;
