import React, {Component} from 'react';
import {LinkContainer} from 'react-router-bootstrap';
import {Nav, Navbar, Container} from 'react-bootstrap'; 

import {motion} from 'framer-motion'; 

class Header extends Component{
    render(){
        return (
            <header>
                <Navbar bg="dark" variant='dark' expand="lg" collapseOnSelect>
                <Container>
                    <LinkContainer to='/'>
                        <motion.div
                            initial={{y:-250}}
                            animate={{y: -1}}
                            transition={{delay:0.2}}
                        >
                            <Navbar.Brand>TO DO List</Navbar.Brand>
                        </motion.div>
                    </LinkContainer>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            <LinkContainer to='/home'>
                                <Nav.Link><i className='fas fa-clipboard-list'></i> Home</Nav.Link>
                            </LinkContainer>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            </header>
        )
    }
}

export default Header; 
