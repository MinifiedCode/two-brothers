import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './style.css'
// import components for routing
import Navbar from './navbar'
import About from './about'

function Index() {
  return (
    <h1>Index</h1>
  )
}

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />

        {/* routing */}
        <Route exact path="/" component={Index} />
        <Route path="/about" component={About} />
      </div>
    </Router>
  );
}

export default App;
