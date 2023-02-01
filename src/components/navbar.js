import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import ContactModal from './contact-modal';

const Navbar = (props) => {

        const [windowHeight, setWindowHeight] = useState(window.innerHeight);
        const targetOffset = Math.floor(windowHeight * 0.05);

        useEffect(() => {
            function handleResize() {
                setWindowHeight(window.innerHeight);
            }

            window.addEventListener('resize', handleResize);

            return () => {
                window.removeEventListener('resize', handleResize);
            }
        })

    return(
        <nav className="navbar navbar-expand-lg">

            {/* Home */}
            <Link
            activeClass="active"
            to='container-rocket'
            offset={-targetOffset - 13}
            smooth={false}
            spy={true}> <p className='nav-link'>Home</p>
            </Link>

            {/* About Me */}
            <Link
            activeClass="active"
            to='about-me-section'
            offset={-targetOffset}
            smooth={false}
            spy={true}> <p className='nav-link'>About Me</p>
            </Link>

            {/* Projects */}
            <Link
            activeClass="active"
            to='project-section'
            offset={-targetOffset}
            smooth={false}
            spy={true}> <p className='nav-link'>Projects</p>
            </Link>

            {/* Education */}
            <Link
            activeClass="active"
            to='education-section'
            offset={-targetOffset}
            smooth={false}
            spy={true}> <p className='nav-link'>Education</p>
            </Link>

            {/* Career */}
            <Link
            activeClass="active"
            to='career-section'
            offset={-targetOffset}
            smooth={false}
            spy={true}> <p className='nav-link'>Career</p>
            </Link>
            <ContactModal />
        </nav>
    )
}

export default Navbar;