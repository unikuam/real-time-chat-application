import React, { Component } from 'react';
import Home from './components/home/Home';
import Chat from './components/chat/Chat';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const App = () => (
  <Router>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/chat" component={Chat} />
    </Switch>
  </Router>
)

export default App;
