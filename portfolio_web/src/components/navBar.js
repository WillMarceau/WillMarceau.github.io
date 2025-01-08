import React from 'react'

function NavBar({ activeSection }) {

    return (
        <nav className="navBar">
            <a href="#About" className={`montserrat-light navElement  ${activeSection === 'About' ? 'active' : ''}`}>
                About
            </a>
            <a href="#Education" className={`montserrat-light navElement ${activeSection === 'Education' ? 'active' : ''}`}>
                Education
            </a>
            <a href="#Projects" className={`montserrat-light navElement ${activeSection === 'Projects' ? 'active' : ''}`}>
                Projects
            </a>

        </nav>
    )
}

export default NavBar