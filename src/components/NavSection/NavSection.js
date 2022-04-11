import React from 'react';
import { Container, Nav, Navbar,  } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './NavSection.css'
const NavSection = () => {
    return (
        <div >
            <Navbar bg="" variant={"dark"} expand="lg" >
                <Container style={{ marginTop: 35 }}>
                    <Navbar.Brand as={Link} to="/" className='  navBrand'>POWER <span className='text-warning'>GYM</span></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto px-5 navItems">
                             
                            <Nav.Link as={Link} to="/"><h6>Home </h6></Nav.Link>
                            <Nav.Link as={Link} to="/service"><h6> Service </h6></Nav.Link>
                            <Nav.Link as={Link} to="/class"><h6> Our Classes </h6></Nav.Link>
                            <Nav.Link as={Link} to="/about"><h6> About Us </h6></Nav.Link>
                            <Nav.Link as={Link} to="/blogs"><h6> Blogs </h6></Nav.Link>
                            <Nav.Link as={Link} to="/price"><h6> Pricing </h6></Nav.Link>
                            <Nav.Link as={Link} to="/contact"><h6> Contact Us </h6></Nav.Link>

                            {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown> */}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            
        </div>
    );
};

export default NavSection;