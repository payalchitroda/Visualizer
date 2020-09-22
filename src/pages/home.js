import React from 'react';
import Button from 'react-bootstrap/Button';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import KruskalInput from './kruskalinput';
import CoinChangeInput from './coinchangeinput';

function home() {

    return (
        <div>
            <Router>
                <Button variant="dark">
                    <Link to="/kruskalinput">kruskal</Link>
                </Button>
                <Route path="/kruskalinput" render={() => <KruskalInput />} />
                <Button variant="dark">
                    <Link to="/coinchangeinput">coin chnage</Link>
                </Button>
                <Route path="/coinchangeinput" render={() => <CoinChangeInput />} />
                
            </Router>
            
        </div>
    );

}

export default home;