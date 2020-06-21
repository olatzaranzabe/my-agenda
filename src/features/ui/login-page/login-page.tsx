import React, { useState } from 'react';
import { bind } from '../../../utils/bind';
import styles from './login-page.module.css';
import { BrowserRouter as Router, Link, useHistory } from 'react-router-dom';
import { PasswordInput } from '../../../core/components/form/password-input/password-input';
import { BaseInput } from '../../../core/components/form/base-input/base-input';
import { Page } from '../../../core/components/page/page';
const cx = bind(styles);

interface LoginPage {
  value: string;
  required: boolean;
}

export const LoginPage: React.FunctionComponent = () => {
  const [emailValue, setEmailValue] = useState('');
  const [pasValue, setPasValue] = useState('');
  const [inputError, setInputError] = useState('');
  const history = useHistory();

  const url = 'https://my-agenda-app.herokuapp.com/auth/login';

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (pasValue.length === 0 && emailValue.length === 0) {
      return setInputError('Parece que faltan los datos');
    } else if (pasValue.length === 0) {
      return setInputError('Parece que falta la contraseña');
    } else if (emailValue.length === 0) {
      return setInputError('Parece que falta el email');
    } else {
      setInputError('');

      const date = new Date().toISOString();
      const info = JSON.stringify({
        email: emailValue,
        password: pasValue
      });
      fetch(url, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        },
        body: info
      })
        .then(res => res.json())
        .then(data => {
          if (data.username) {
            sessionStorage.setItem('username', data.username.username);
            sessionStorage.setItem('userInfo', data.data.token);
            history.push(`/home:${data.username.username}`);
          } else {
            setInputError('Comprueba los datos introducidos');
          }
        })
        .catch(err => console.log(err));
    }
  };

  return (
    <div className={cx('login-page')}>
      <Page>
        <h2 className={cx('login-title')}>Iniciar sesión</h2>
        <form onSubmit={handleSubmit} className={cx('login-form')}>
          <BaseInput
            required={true}
            value={emailValue}
            label="Email"
            onChange={setEmailValue}
            type={'text'}
          ></BaseInput>
          <PasswordInput
            required={true}
            value={pasValue}
            label="Contraseña"
            onChange={setPasValue}
          ></PasswordInput>
          <p className={cx('error-message')}>{inputError}</p>
          <button className={cx('btn')}>Iniciar sesión</button>
        </form>
      </Page>
      <Page>
        <div className={cx('second-page')}>
          <p>¿Aún no tienes cuenta?</p>
          <Link to="/signup" className={cx('link')}>
            Crear cuenta
          </Link>
        </div>
      </Page>
    </div>
  );
};
