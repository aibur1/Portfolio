import React from 'react';
import { Container, Nav, Navbar  } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';


const Navigation = () => {
    return (
        <>
            <Navbar bg="dark" variant="white">
                <Container>
                    <Nav className="">
                        <NavLink to="/home">Home</NavLink>
                        <NavLink to="/about">About</NavLink>
                        <NavLink to="/blogs">Blogs</NavLink>
                        <NavLink to="/contact">Contact</NavLink>
                        <button><a href="https://drive.google.com/file/d/1ZJj7ihaDpDy913tJ5nncYgQ1IrnHtGKK/view">Resume</a></button>
                      
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
};

export default Navigation;