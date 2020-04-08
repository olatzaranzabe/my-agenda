import React, { useEffect, useState } from 'react';
import { bind } from '../../../utils/bind';
import styles from './get-date.module.css';

const cx = bind(styles);

export const GetTomorrow: React.FunctionComponent = () => {
  const [tomorrowDate, setDate] = useState('');
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
    const today = new Date();

    // Sumamos los milisegundos que tiene un dia
    var tomorrow = new Date(today.getTime() + 24 * 60 * 60 * 1000)
      .toISOString()
      .slice(8, 10);
    setDate(tomorrow);
    const m = new Date();
    const month = monthNames[m.getMonth()];
    setMonth(month);
  }, []);

  return (
    <div>
      <p className={cx('date')}>
        <span className={cx('date-number')}>{tomorrowDate}</span> de{' '}
        {currentMonth}
      </p>
    </div>
  );
};
