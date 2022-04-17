import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useLocation } from 'react-router-dom';
import auth from '../../../firebse.init';
import img from '../../../images/logo/online-health-doctor-service-logo-CE0A440203-seeklogo.com (1).png'
import './Header.css'

const Header = () => {
    const location = useLocation()
    const [user] = useAuthState(auth)
    return (
        <div className='header'>
            <Navbar bg={location.pathname === '/' || location.pathname === '/home' ? "none" : "light"} expand="lg" >
                <Container>
                    <Navbar.Brand href="#home">
                        <img src={img} alt="" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />

                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link as={Link} to="/home" className={location.pathname === '/' || location.pathname === '/home' ? "text-white" : "text-dark"}>Home</Nav.Link>
                            <Nav.Link as={Link} to="/about" className={location.pathname === '/' || location.pathname === '/home' ? "text-white" : "text-dark"}>About</Nav.Link>
                            <Nav.Link as={Link} className={location.pathname === '/' || location.pathname === '/home' ? "text-white" : "text-dark"} to="/blogs">Blogs</Nav.Link>
                            <Nav.Link href='home#services' className={location.pathname === '/' || location.pathname === '/home' ? "text-white" : "text-dark"}>Services</Nav.Link>
                            {
                                user ?
                                    <Nav.Link onClick={() => signOut(auth)} className={`bg-danger rounded-3 px-4 ${location.pathname === '/' || location.pathname === '/home' ? "text-white" : "text-dark"}`}>Sign Out</Nav.Link>
                                    :
                                    <Nav.Link className={`bg-primary rounded-3 px-4 ${location.pathname === '/' || location.pathname === '/home' ? "text-white" : "text-dark"}`} as={Link} to="/login">Sign in</Nav.Link>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;