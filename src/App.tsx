import React from 'react';
import { LoginPage } from './features/ui/login-page/login-page';
import { SignUpPage } from './features/ui/signup-page/signup-page';
import { WelcomePage } from './features/ui/welcome-page/welcome-page';
import { Home } from './features/ui/home/home';
import { PrivateRoute } from './features/ui/private-route/private-route';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

export const ProtectedRoute: React.FC = () => {
  return (
    <Route path="/home:username" component={Home}>
      <Home />
    </Route>
  );
};

export const App: React.FC = () => {
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
          <PrivateRoute>
            <ProtectedRoute />
          </PrivateRoute>
          <Route exact path="/">
            <WelcomePage />
          </Route>
          <Route>
            <h1>Error 404</h1>
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
