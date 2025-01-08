import React, { useState, useEffect} from "react";
import NavBar from "../components/navBar";

function NavBarContainer() {
    const [activeSection, setActiveSection] = useState('');

    useEffect(() => {
        const scrollableArea = document.querySelector('.right');

        const handleScroll = () => {
            const sections = scrollableArea.querySelectorAll('section');
            let currentSection = '';

            sections.forEach((section, index) => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;

                if (scrollableArea.scrollTop >= sectionTop - sectionHeight / 3) {
                    currentSection = section.getAttribute('id')
                };

                const isLastSection = index === sections.length - 1;
                const isAtBottom =
                scrollableArea.scrollTop + scrollableArea.clientHeight >= scrollableArea.scrollHeight;
        
                if (isLastSection && isAtBottom) {
                    currentSection = section.getAttribute('id');
                }
            });

            setActiveSection(currentSection);
        };

        scrollableArea.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <NavBar activeSection={activeSection} />
    )
}

export default NavBarContainer;