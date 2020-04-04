import React from 'react';
import { FirstPage } from '../first-page/first-page';
import { SecondPage } from '../second-page/second-page';
import { bind } from '../../../utils/bind';
import styles from './home.module.css';

const cx = bind(styles);

export const Home: React.FunctionComponent = () => {
  console.log('home');
  return (
    <div className={cx('home')}>
      <FirstPage />
      <SecondPage />
    </div>
  );
};
