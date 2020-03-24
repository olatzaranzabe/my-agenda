import React, { Fragment, useState } from 'react';
import { bind } from '../../../utils/bind';
import styles from './login-page.module.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { PasswordInput } from '../../../core/components/form/password-input/password-input';
import { BaseInput } from '../../../core/components/form/base-input/base-input';

const cx = bind(styles);

interface LoginPage {
  value: string;
  setValue: string;
  useState: string;
  required: boolean;
  type: string;
}

export const LoginPage: React.FunctionComponent = ({}) => {
  const [value, setValue] = useState('');
  const [pasValue, setPasValue] = useState('');
  return (
    <Fragment>
      <form action="/login" method="POST">
        <BaseInput></BaseInput>
        <PasswordInput></PasswordInput>
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
      <div>
        <p>¿Aún no tienes cuenta?</p>
        <Link to="/signup">
          <p>Crear cuenta</p>
        </Link>
      </div>
    </Fragment>
  );
};
