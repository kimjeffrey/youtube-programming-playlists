import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './Home'
import ReactPL from './ReactPL'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/react">
          <ReactPL />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
