import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './Home'
import ReactPL from './ReactPL'
import ProjectPL from './ProjectPL'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/react">
          <ReactPL />
        </Route>
        <Route path="/projects">
          <ProjectPL />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
