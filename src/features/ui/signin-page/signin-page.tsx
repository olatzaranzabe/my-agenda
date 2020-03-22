import React, { Fragment } from 'react'
import { bind } from '../../../utils/bind'
import styles from './signin-page.module.css'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import { LoginPage } from '../login-page/login-page';
const cx = bind(styles)

export const SignInPage: React.FunctionComponent<{}> = () => {
  return (
        <Fragment>
            <form action="/auth/signin" method="POST">
                <div className={cx('form-group')}>
                    <label htmlFor="username">Username</label>
                    <input type="text" className={cx('form-group')} id="username" name="username" />
                </div>
                <div className={cx('form-group')}>
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="password" className={cx('form-group')} id="exampleInputPassword1" name="password" />
                </div>
                <button type="submit" className={cx('btn btn-primary')}>Submit</button>
            </form>
            <Router>
                <div>
                    <p>¿Ya tienes una cuenta?</p>
                    <Link to="/auth/login"><p>Iniciar sesión</p></Link>                
                </div>
                <Switch>
                    <Route path="auth/login">
                        <LoginPage/>
                    </Route>
                </Switch>
            </Router>   

      </Fragment>
  )
}