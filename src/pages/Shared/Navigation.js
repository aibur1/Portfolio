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
                        <button className="nab site_btn "><a  href="https://drive.google.com/file/d/1ZJj7ihaDpDy913tJ5nncYgQ1IrnHtGKK/view" target="_blank">Resume</a></button>
                      
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
};

export default Navigation;