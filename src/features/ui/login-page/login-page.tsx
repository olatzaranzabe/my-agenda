import React, { Fragment } from 'react';
import { bind } from '../../../utils/bind';
import styles from './login-page.module.css';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { SignInPage } from '../signin-page/signin-page';

const cx = bind(styles);

export const LoginPage: React.FunctionComponent<{}> = () => {
  return (
    <Fragment>
      <form action="/auth/login" method="POST">
        <div className={cx('form-group')}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            className={cx('form-group')}
            id="username"
            name="username"
          />
        </div>
        <div className={cx('form-group')}>
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            type="password"
            className={cx('form-group')}
            id="exampleInputPassword1"
            name="password"
          />
        </div>
        <button type="submit" className={cx('btn btn-primary')}>
          Submit
        </button>
      </form>
      <Router>
        <div>
          <p>¿Aún no tienes cuenta?</p>
          <Link to="/auth/signin">
            <p>Crear cuenta</p>
          </Link>
        </div>
        <Switch>
          <Route path="auth/signin">
            <SignInPage />
          </Route>
        </Switch>
      </Router>
    </Fragment>
  );
};
