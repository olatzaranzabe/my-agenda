import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { FirstPage } from '../first-page/first-page';
import { SecondPage } from '../second-page/second-page';
import { bind } from '../../../utils/bind';
import styles from './home.module.css';
import { async } from 'q';

const cx = bind(styles);

export const Home: React.FunctionComponent = () => {
  const url = 'http://localhost:5000/auth/logout';
  const history = useHistory();
  const [login, setLogin] = useState('login');

  const handleLogout = async () => {
    console.log('logout click');
    sessionStorage.removeItem('username');
    setLogin('logout');
    history.push('/login');
  };
  // const fetchLogout = async () => {
  //   const response = await fetch(url);
  //   const result = await response.json();
  //   //sessionStorage.removeItem('username');
  //   history.push('/login');
  //   console.log(result);
  // };

  // useEffect(() => {
  //   fetchLogout();
  // }, [login]);
  return (
    <div className={cx('home')}>
      <button className={cx('button-prev')}>prev</button>
      <FirstPage />
      <SecondPage />
      <button className={cx('button-next')}>next</button>
      <button onClick={handleLogout} className={cx('button-logout')}>
        Cerrar sesión
      </button>
    </div>
  );
};
