import React, { useEffect, useState } from 'react';
import { bind } from '../../../utils/bind';
import styles from './get-date.module.css';

const cx = bind(styles);

export const GetDate: React.FunctionComponent = () => {
  const [currentDate, setDate] = useState('');
  const [currentYear, setYear] = useState('');
  const [currentMonth, setMonth] = useState('');

  const monthNames = [
    'Enero',
    'Febrero',
    'Marzo',
    'Abril',
    'Mayo',
    'Junio',
    'Julio',
    'Agosto',
    'Septiembre',
    'Octubre',
    'Noviembre',
    'Diciembre'
  ];

  useEffect(() => {
    const date = new Date().toISOString().slice(8, 10);
    const year = new Date().toISOString().slice(0, 4);
    const m = new Date();
    const month = monthNames[m.getMonth()];
    setYear(year);
    setDate(date);
    setMonth(month);
  }, []);

  return (
    <div className={cx('date-div')}>
      <p className={cx('date-year')}>Año {currentYear}</p>
      <p className={cx('date')}>
        <span className={cx('date-number')}>{currentDate}</span> de{' '}
        {currentMonth}
      </p>
    </div>
  );
};
