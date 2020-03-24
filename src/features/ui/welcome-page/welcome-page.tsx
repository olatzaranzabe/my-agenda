import React, { Fragment } from 'react';
import { bind } from '../../../utils/bind';
import styles from './welcome-page.module.css';
import { LoginPage } from '../login-page/login-page';
import { SignUpPage } from '../signup-page/signup-page';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
const cx = bind(styles);

export const WelcomePage: React.FunctionComponent<{}> = () => {
  return (
    <Fragment>
      <div className={cx('welcome_wrapper')}>
        <div>
          <h1>
            Bienvenido a tu <span className={cx('bold')}>agenda online</span>
          </h1>
          <p>
            Ahorra papel y no te precupes de llevarla siempre encima. Podrás
            acceder desde cualquier dispositivo las 24 horas del día.
          </p>
        </div>
        <div className={cx('buttons-list')}>
          <div className={cx('button-element')}>
            <Link to="/login">
              <p>¿Ya tienes una cuenta?</p>
              <p>Iniciar sesión</p>
            </Link>
          </div>
          <div className={cx('button-element')}>
            <Link to="/signup">
              <p>¿Aún no tienes cuenta?</p>
              <p>Crear cuenta</p>
            </Link>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
