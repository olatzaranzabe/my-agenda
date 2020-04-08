import React, { Fragment, useState } from 'react';
import { bind } from '../../../utils/bind';
import styles from './login-page.module.css';
import {
  BrowserRouter as Router,
  Route,
  Link,
  useHistory
} from 'react-router-dom';
import { PasswordInput } from '../../../core/components/form/password-input/password-input';
import { BaseInput } from '../../../core/components/form/base-input/base-input';
import { Page } from '../../../core/components/page/page';

const cx = bind(styles);

interface LoginPage {
  value: string;
  required: boolean;
}

export const LoginPage: React.FunctionComponent = () => {
  const [value, setValue] = useState('');
  const [pasValue, setPasValue] = useState('');
  const history = useHistory();

  const url = 'http://localhost:5000/login';

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const date = new Date().toISOString();
    const info = JSON.stringify({
      username: value,
      password: pasValue
    });
    fetch(url, {
      method: 'POST',
      body: info
    })
      .then(res => res.json())
      .then(data => console.log(data))
      .catch(err => console.log(err));

    history.push('/home');
  };

  return (
    <div className={cx('login-page')}>
      <Page>
        <form
          className={cx('login-form')}
          action="/home"
          onSubmit={handleSubmit}
        >
          <BaseInput
            required={true}
            value={value}
            label="Usarname"
            onChange={setValue}
            type={'text'}
          ></BaseInput>
          <PasswordInput
            required={true}
            value={pasValue}
            label="Contraseña"
            onChange={setPasValue}
          ></PasswordInput>
          <Link to="/home">
            <button type="submit" className={cx('btn')}>
              Submit
            </button>
          </Link>
        </form>
      </Page>
      <Page>
        <div className={cx('second-page')}>
          <p>¿Aún no tienes cuenta?</p>
          <Link to="/signup">
            <p className={cx('link')}>Crear cuenta</p>
          </Link>
        </div>
      </Page>
    </div>
  );
};
