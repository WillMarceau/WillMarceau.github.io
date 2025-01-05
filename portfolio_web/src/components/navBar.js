import React from 'react'

function NavBar(activeSection) {

    return (
        <nav className="navBar">
            <a href="#About" className={`montserrat-light navElement ${activeSection === 'about' ? 'active' : ''}`}>
                About
            </a>
            <a href="#Education" className={`montserrat-light navElement ${activeSection === 'education' ? 'active' : ''}`}>
                Education
            </a>
            <a href="#Projects" className={`montserrat-light navElement ${activeSection === 'projects' ? 'active' : ''}`}>
                Projects
            </a>

        </nav>
    )
}

export default NavBar