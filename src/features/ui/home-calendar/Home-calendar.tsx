import React, { useState } from 'react';
import { bind } from '../../../utils/bind';
import styles from './home-calendar.module.css';
import Calendar from 'react-calendar';

const cx = bind(styles);

interface Props {
  showDate: any;
}

export const HomeCalendar: React.FunctionComponent<Props> = ({ showDate }) => {
  const [openCalendar, setOpenCalendar] = useState(false);

  const showCalendar = () => {
    setOpenCalendar(true);
  };

  const changeCalendar = (e: any) => {
    setOpenCalendar(false);
    showDate(e);
  };
  return (
    <button onClick={showCalendar} className={cx('button-calendar')}>
      {openCalendar ? (
        <Calendar onChange={changeCalendar} className={cx('calendar')} />
      ) : (
        <p>cambiar fecha</p>
      )}
    </button>
  );
};
