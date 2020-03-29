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

const cx = bind(styles);

interface LoginPage {
  value: string;
  required: boolean;
}

export const LoginPage: React.FunctionComponent = () => {
  const [value, setValue] = useState('');
  const [pasValue, setPasValue] = useState('');
  const history = useHistory();

  return (
    <Fragment>
      <form action="/login" method="POST" className={cx('form-group')}>
        <BaseInput
          required={true}
          value={value}
          label="My input"
          onChange={setValue}
          type={'text'}
        ></BaseInput>
        <PasswordInput
          required={true}
          value={pasValue}
          label="My input"
          onChange={setPasValue}
        ></PasswordInput>
        <button onClick={() => history.push('/home')}></button>
        <Link to="/home">
          <button type="submit" className={cx('btn btn-primary')}>
            Submit
          </button>
        </Link>
      </form>
      <div>
        <p>¿Aún no tienes cuenta?</p>
        <Link to="/signup">
          <p className={cx('link')}>Crear cuenta</p>
        </Link>
      </div>
    </Fragment>
  );
};
