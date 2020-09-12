import React from 'react';
import Button from 'react-bootstrap/Button';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Algo from './algo';


function home() {

    return (
        <div>
            <Router>
                <Button variant="dark">
                    <Link to="/algo">kruskal</Link>
                </Button>
                <Route path="/algo" render={() => <Algo />} />
                
            </Router>
            
        </div>
    );

}

export default home;