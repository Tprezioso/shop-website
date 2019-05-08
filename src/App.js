import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from "./Components/Home";

function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Home} />
        {/* <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} /> */}
      </div>
    </Router>

  );
}

export default App;
