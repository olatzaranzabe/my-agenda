import React, { Fragment } from 'react';
import { bind } from '../../../utils/bind';
import styles from './signup-page.module.css';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { LoginPage } from '../login-page/login-page';
import { PasswordInput } from '../../../core/components/form/password-input/password-input';
import { BaseInput } from '../../../core/components/form/base-input/base-input';

const cx = bind(styles);

interface SignUpPage {
  value: string;
  setValue: string;
  useState: string;
  required: boolean;
  type: string;
}

export const SignUpPage: React.FunctionComponent<{}> = () => {
  const [value, setValue] = useState('');
  const [pasValue, setPasValue] = useState('');
  return (
    <Fragment>
      <form action="/signup" method="POST">
        <BaseInput
          required={isRequired}
          value={value}
          label="My input"
          onChange={setValue}
        ></BaseInput>
        <PasswordInput
          required={isRequired}
          value={pasValue}
          label="My input"
          onChange={setPasValue}
        ></PasswordInput>
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
        <p>¿Ya tienes una cuenta?</p>
        <Link to="/login">
          <p>Iniciar sesión</p>
        </Link>
      </div>
    </Fragment>
  );
};
