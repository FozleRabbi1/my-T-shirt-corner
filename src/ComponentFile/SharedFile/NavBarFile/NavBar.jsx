import { Navbar } from 'flowbite-react';
import React from 'react';
import { Link } from 'react-router-dom';
import "./NavBar.css";
import ActiveLink from './ActiveLinkFile/ActiveLink';

const NavBar = () => {
    return (
        <div className='sticky top-0 z-50'>
            <Navbar  className="nav-style "
                fluid={true}
                rounded={true}
            >
                <Navbar.Brand>
                    <img
                        src="https://flowbite.com/docs/images/logo.svg"
                        className="mr-3 h-6 sm:h-9"
                        alt="Flowbite Logo"
                    />
                    <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
                        Flowbite
                    </span>
                </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse>
                    <Navbar.Link>
                        <ActiveLink to={"/"}> Home</ActiveLink>
                    </Navbar.Link>
                    <Navbar.Link>
                        <ActiveLink to={"/about"}>About</ActiveLink>
                    </Navbar.Link>
                    <Navbar.Link>
                        <ActiveLink to={"/Login"}>Login</ActiveLink>
                    </Navbar.Link>
                    <Navbar.Link href="/Contact">
                        Contact
                    </Navbar.Link>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default NavBar;