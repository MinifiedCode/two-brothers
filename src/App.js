import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './style.css'
// import components for routing
import Navbar from './navbar'
import About from './about'
import Home from './home'

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />

        {/* routing */}
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
      </div>
    </Router>
  );
}

export default App;
