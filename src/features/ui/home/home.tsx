import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import 'react-calendar/dist/Calendar.css';
import { FirstPage } from '../first-page/first-page';
import { SecondPage } from '../second-page/second-page';
import { bind } from '../../../utils/bind';
import styles from './home.module.css';
import arrowBefore from '../../../assets/arrow-before.svg';
import arrowNext from '../../../assets/arrow-next.svg';
import { LogoutPage } from '../logout-page/logout-page';
// import ApiClient from '../../../infrastructure/api-client';
import { HomeCalendar } from '../home-calendar/Home-calendar';
import * as listItems from '../../../infrastructure/list-items-client';

const cx = bind(styles);

interface Task {
  task: string;
  date: any;
  finished: boolean;
  username: string;
  _id: string;
  changeDate: number;
}

export const Home: React.FunctionComponent = () => {
  // console.log('apliclient', ApiClient.taskList);
  // const url = 'http://localhost:5000/auth/logout';
  const history = useHistory();
  const [showDate, setShowDate] = useState(new Date());
  const localUsername = sessionStorage.getItem('username');

  const fetchTasks = async () => {
    const res = await listItems.getTaskList();
    await setTasks(res.taskList);
  };

  const date = parseInt(new Date().toISOString().slice(0, 10));
  const [changeDate, setChangeDate] = useState(0);
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    fetchTasks();
  }, []);

  const handleClickNext = () => {
    setChangeDate(changeDate + 1);
  };

  const handleClickPrev = () => {
    setChangeDate(changeDate - 1);
  };
  const checkCalendarDate = (e: any) => {
    setChangeDate(0);
    setShowDate(e);
  };
  console.log(tasks);
  return (
    <div className={cx('home')}>
      <button onClick={handleClickPrev} className={cx('button-prev')}>
        <img src={arrowBefore} alt="previous page" />
      </button>
      <FirstPage
        onSubmitTask={fetchTasks}
        tasks={tasks}
        changeDate={changeDate}
        showDate={showDate}
      />
      <SecondPage
        onSubmitTask={() => fetchTasks()}
        tasks={tasks}
        changeDate={changeDate}
        showDate={showDate}
      />
      <button onClick={handleClickNext} className={cx('button-next')}>
        <img src={arrowNext} alt="next page" />
      </button>
      <div className={cx('buttons-group')}>
        <LogoutPage />
        <HomeCalendar showDate={checkCalendarDate} />
      </div>
    </div>
  );
};
