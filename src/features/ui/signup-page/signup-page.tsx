import React, { Fragment, useState } from 'react';
import { bind } from '../../../utils/bind';
import styles from './signup-page.module.css';
import { BrowserRouter as Router, Link, useHistory } from 'react-router-dom';
import { PasswordInput } from '../../../core/components/form/password-input/password-input';
import { BaseInput } from '../../../core/components/form/base-input/base-input';
import { Button } from '../../../core/components/button/button';

const cx = bind(styles);

interface SignUpPage {
  required: boolean;
  type: string;
}

export const SignUpPage: React.FunctionComponent = () => {
  const [inputValue, setInputValue] = useState('');
  const [pasValue, setPasValue] = useState('');

  const history = useHistory();
  const url = 'http://localhost:5000/signup';

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const date = new Date().toISOString();
    fetch(url, {
      method: 'POST',
      headers: new Headers(),
      body: JSON.stringify({
        name: '',
        username: 'x',
        email: date,
        password: ''
      })
    })
      .then(res => res.json())
      .then(data => console.log(data))
      .catch(err => console.log(err));
  };

  return (
    <Fragment>
      <form action="/signup" onSubmit={handleSubmit}>
        <BaseInput
          required={true}
          value={inputValue}
          label="Usuario"
          onChange={setInputValue}
          type={'text'}
        ></BaseInput>
        <PasswordInput
          required={true}
          value={pasValue}
          label="Contraseña"
          onChange={setPasValue}
        ></PasswordInput>
        <button onClick={() => history.push('/home')}></button>

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
