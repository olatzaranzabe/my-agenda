import React from 'react';
import { useHistory } from 'react-router-dom';
import { bind } from '../../../utils/bind';
import styles from './logout-page.module.css';
import logout from '../../../assets/logout.svg';

const cx = bind(styles);

export const LogoutPage: React.FunctionComponent = () => {
  const history = useHistory();

  const handleLogout = async () => {
    sessionStorage.removeItem('username');
    sessionStorage.removeItem('userInfo');
    history.push('/login');
  };
  return (
    <button onClick={handleLogout} className={cx('button-logout')}>
      <img src={logout} alt="logout icon" />
    </button>
  );
};
