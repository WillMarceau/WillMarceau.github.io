import React from 'react'

function NavBar(activeSection) {

    return (
        <nav className="navBar">
            <a href="#about" className={`navElement ${activeSection === 'about' ? 'active' : ''}`}>
                About
            </a>
            <a href="#Education" className={`navElement ${activeSection === 'about' ? 'active' : ''}`}>
                Education
            </a>
            <a href="#Projects" className={`navElement ${activeSection === 'about' ? 'active' : ''}`}>
                Projects
            </a>

        </nav>
    )
}

export default NavBar