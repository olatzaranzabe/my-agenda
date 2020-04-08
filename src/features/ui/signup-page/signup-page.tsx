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

  const history = useHistory();
  const url = 'http://localhost:5000/signup';

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    const date = new Date().toISOString();
    fetch(url, {
      method: 'POST',
      headers: new Headers(),
      body: JSON.stringify({
        name: '',
        username: 'x',
        email: date,
        password: pasValue
      })
    })
      .then(res => res.json())
      .then(data => console.log(data))
      .catch(err => console.log(err));

    history.push('/home');
  };

  return (
    <div className={cx('signup-page')}>
      <Page>
        <form action="/signup" onSubmit={handleSubmit}>
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

          <button type="submit" className={cx('btn')}>
            Submit
          </button>
        </form>
      </Page>
      <Page>
        <div>
          <p>¿Ya tienes una cuenta?</p>
          <Link to="/login">
            <p>Iniciar sesión</p>
          </Link>
        </div>
      </Page>
    </div>
  );
};
