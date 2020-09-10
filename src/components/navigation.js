import React from 'react';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

function home() {

    return (
        <div style={{ backgroundColor: "darkcyan" ,height:"200px" , paddingRight: "50px"}}>

            <Navbar bg="transparent" variant="dark" expand="lg">

                <Navbar.Collapse id="navbar-toggle">
                    <Nav className="ml-auto">
                        <Link className="nav-link" to="/">Home</Link>
                        <Link className="nav-link" to="/">About</Link>
                        <Link className="nav-link" to="/">Contact</Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <h1 style={{textAlign: "center"}}>HackTheAlgo</h1>
        </div>
    );

}

export default home;