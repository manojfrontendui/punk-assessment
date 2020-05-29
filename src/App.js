import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import ViewPage from './pages/view/ViewPage';
import HomePage from './pages/home/HomePage';

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1 className="app-title">Punk Assessment</h1>
      </header>
      <div className="app-body">
        <Router>
          <Switch>
            <Route exact path="/beers" component={HomePage} />
            <Route exact path="/beers/:beerId" component={ViewPage} />
            <Redirect from="/" to="/beers" />
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
