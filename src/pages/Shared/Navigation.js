import React from 'react';
import { Container, Nav, Navbar  } from 'react-bootstrap';
import './Navigation.css';


const Navigation = () => {
    return (
        <div className=''>
            <Navbar className='' collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
       
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/blogs">Blogs</Nav.Link>
            <Nav.Link className='' href="/contact">Contact</Nav.Link>
            <Nav.Link  href="/resume"><a  href="https://drive.google.com/file/d/12jX3CtzBXoMqIFDS-L0uj25z5w1VrR-T/view?usp=sharing" target="_blank"   rel="" className='nab'>Resume</a></Nav.Link>
            
          </Nav>
         
        </Navbar.Collapse>
        </Container>
      </Navbar> 
        </div>
    );
};

export default Navigation;

{/* <>
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
        </> */}