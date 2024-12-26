import './App.css'
import React from 'react';

// components
import NavBar from './components/navBar';
import About from './components/About';
import Education from './components/Education';
import Projects from './components/Projects';

function App() {

  return (
    <div className="split">
      <div className="left montserrat-light">
        <h1 className="montserrat-bold name">Will Marceau</h1>
        <h3 className="field">Computer Science Undergrad</h3>
        <h4 className="phone">Phone: (512) 952-1090</h4>
        <h4 className="email">Emal: willfmarceau@gmail.com</h4>
        <h6 className="links">Github | LinkedIn</h6>
        <NavBar />
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
