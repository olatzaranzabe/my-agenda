import React from 'react';
import { useHistory } from 'react-router-dom';
import { bind } from '../../../utils/bind';
import styles from './logout-page.module.css';
import logoutIcon from '../../../assets/logout.svg';
// import logout from '../../../infrastructure/api-client';

const cx = bind(styles);

export const LogoutPage: React.FunctionComponent = () => {
  const history = useHistory();

  const handleLogout = async () => {
    sessionStorage.removeItem('username');
    sessionStorage.removeItem('userInfo');

    // logout.logout();
    history.push('/login');
  };

  return (
    <button onClick={handleLogout} className={cx('button-logout')}>
      <img src={logoutIcon} alt="logout icon" />
    </button>
  );
};
