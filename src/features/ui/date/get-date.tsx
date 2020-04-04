import React, { useEffect, useState } from 'react';
import { bind } from '../../../utils/bind';
import styles from './get-date.module.css';

const cx = bind(styles);

export const GetDate: React.FunctionComponent = () => {
  const [currentDate, setDate] = useState('');
  console.log('date');
  useEffect(() => {
    console.log('.');
    const date = new Date().toISOString();
    setDate(date);
  }, []);

  return (
    <div>
      <div className={cx('date')}>{currentDate}</div>
    </div>
  );
};
