import React from 'react';
import { LoginPage } from './features/ui/login-page/login-page';
import { SignInPage } from './features/ui/signin-page/signin-page';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/">
            <LoginPage />
          </Route>
          <Route exact path="/auth/login"></Route>

          <Route exact path="/auth/signup">
            <SignInPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
