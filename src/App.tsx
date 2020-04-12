import React from 'react';
import { LoginPage } from './features/ui/login-page/login-page';
import { SignUpPage } from './features/ui/signup-page/signup-page';
import { WelcomePage } from './features/ui/welcome-page/welcome-page';
import { FirstPage } from './features/ui/first-page/first-page';
import { Home } from './features/ui/home/home';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/login">
            <LoginPage />
          </Route>
          <Route exact path="/signup">
            <SignUpPage />
          </Route>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/">
            <WelcomePage />
          </Route>
          <Route>
            <h1>404</h1>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
