import React from 'react';
import Navbar from './navbar'
import { BrowserRouter as Router, Route } from "react-router-dom";

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
      </div>
    </Router>
  );
}

export default App;
