import React, { useState } from 'react';
import { bind } from '../../../utils/bind';
import styles from './signup-page.module.css';
import { BrowserRouter as Router, Link, useHistory } from 'react-router-dom';
import { PasswordInput } from '../../../core/components/form/password-input/password-input';
import { BaseInput } from '../../../core/components/form/base-input/base-input';
import { Page } from '../../../core/components/page/page';

const cx = bind(styles);

interface SignUpPage {
  required: boolean;
  type: string;
}

export const SignUpPage: React.FunctionComponent = () => {
  const [inputValue, setInputValue] = useState('');
  const [inputNameValue, setInputNameValue] = useState('');
  const [inputEmailValue, setInputEmailValue] = useState('');
  const [pasValue, setPasValue] = useState('');
  const [inputError, setInputError] = useState('');
  const history = useHistory();
  const url = 'https://my-agenda-app.herokuapp.com/auth/signup';

  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    if (
      inputValue.length === 0 ||
      inputNameValue.length === 0 ||
      inputEmailValue.length === 0 ||
      pasValue.length === 0
    ) {
      event.preventDefault();
      return setInputError(
        'Debes rellenar todos los campos marcados con una *'
      );
    } else if (!re.test(String(inputEmailValue).toLowerCase())) {
      event.preventDefault();
      return setInputError('El email introducido no es válido');
    } else {
      setInputError('');
      fetch(url, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        },
        body: JSON.stringify({
          name: inputNameValue,
          username: inputValue,
          email: inputEmailValue,
          password: pasValue
        })
      })
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(err => console.log(err));

      history.push('/login');
    }
  };

  return (
    <div className={cx('signup-page')}>
      <Page>
        <h2 className={cx('signup-title')}>Crear cuenta</h2>
        <form onSubmit={handleSubmit}>
          <BaseInput
            required={true}
            value={inputNameValue}
            label="Nombre"
            onChange={setInputNameValue}
            type={'text'}
          ></BaseInput>
          <BaseInput
            required={true}
            value={inputValue}
            label="Nombre de usuario"
            onChange={setInputValue}
            type={'text'}
          ></BaseInput>
          <BaseInput
            required={true}
            value={inputEmailValue}
            label="Email"
            onChange={setInputEmailValue}
            type={'text'}
          ></BaseInput>
          <PasswordInput
            required={true}
            value={pasValue}
            label="Contraseña"
            onChange={setPasValue}
          ></PasswordInput>
          <p>{inputError}</p>
          <button className={cx('btn')}>Crear Cuenta</button>
        </form>
      </Page>
      <Page>
        <div className={cx('login-info')}>
          <p>¿Ya tienes una cuenta?</p>
          <Link to="/login">Iniciar sesión</Link>
        </div>
      </Page>
    </div>
  );
};
