import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './Home'
import Playlist from './Playlist'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/playlist/:topic">
          <Playlist />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
