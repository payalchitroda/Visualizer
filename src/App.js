
import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from './pages/home';
import Navigation from './components/navigation';
import Footer from './components/footer';
import './App.css';



class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      title: 'HackTheAlgo',

    }
  }

  render() {
    return (

      <Router>
        <div>
          <Navigation />
          <Route path="/" exact render={() => <Home />} />
        </div>
        <Footer/>
      </Router>
    

    );
  }
}
export default App;
