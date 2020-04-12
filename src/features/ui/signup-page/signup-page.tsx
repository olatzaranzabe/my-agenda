import React, { useState } from 'react';
import { bind } from '../../../utils/bind';
import styles from './signup-page.module.css';
import { BrowserRouter as Router, Link, useHistory } from 'react-router-dom';
import { PasswordInput } from '../../../core/components/form/password-input/password-input';
import { BaseInput } from '../../../core/components/form/base-input/base-input';
import { Button } from '../../../core/components/button/button';
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
  const url = 'http://localhost:5000/auth/signup';

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
    } else {
      setInputError('');
      const date = new Date().toISOString();
      fetch(url, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
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
          <button className={cx('btn')}>Submit</button>
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
