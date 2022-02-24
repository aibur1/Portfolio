import React from 'react';
import { Container, Nav, Navbar  } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import nab from './Navigation.css';


const Navigation = () => {
    return (
        <>
            <Navbar className="name" variant="dark">
                <Container>
                    <Nav >
                        <NavLink className="nab" to="/home">Home</NavLink>
                        <NavLink className="nab" to="/about">About</NavLink>
                        <NavLink className="nab" to="/blogs">Blogs</NavLink>
                        <NavLink className="nab" to="/contact">Contact</NavLink>
                        <nabLink  className="site_btn "><a  href="https://drive.google.com/file/d/12jX3CtzBXoMqIFDS-L0uj25z5w1VrR-T/view?usp=sharing" target="_blank" className='nab'>Resume</a></nabLink>
                      
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
};

export default Navigation;