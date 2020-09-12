import React from 'react';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavItem from 'react-bootstrap/NavItem';
import Contact from '../pages/contact';
function home() {

    return (
        <div>
        <div style={{ backgroundColor: "darkcyan" ,height:"200px" , paddingRight: "50px"}}>

            <Navbar bg="transparent" variant="dark" expand="lg">

                <Navbar.Collapse id="navbar-toggle">
                    <Nav className="ml-auto">
                        <Link className="nav-link" to="/">Home</Link>
                        <Link className="nav-link" to="/">About</Link>
                        <Link className="nav-link" to="/contact" >Contact</Link>
                    </Nav>
                    
               
                </Navbar.Collapse>
            </Navbar>
            
            <h1 style={{textAlign: "center"}}>HackTheAlgo</h1>
            
        </div>
        <Route
                    path="/contact"
                    component={Contact} 
                />
                </div>
    );

}

export default home;