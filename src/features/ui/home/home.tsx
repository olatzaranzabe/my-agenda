import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { FirstPage } from '../first-page/first-page';
import { SecondPage } from '../second-page/second-page';
import { bind } from '../../../utils/bind';
import styles from './home.module.css';
import logout from '../../../assets/logout.svg';
import arrowBefore from '../../../assets/arrow-before.svg';
import arrowNext from '../../../assets/arrow-next.svg';

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
  const url = 'http://localhost:5000/auth/logout';
  const history = useHistory();
  const [login, setLogin] = useState('login');

  const handleLogout = async () => {
    sessionStorage.removeItem('username');
    sessionStorage.removeItem('userInfo');
    setLogin('logout');
    history.push('/login');
  };
  const localUsername = sessionStorage.getItem('username');
  const urlHome = `http://localhost:5000/auth/home/:${localUsername}`;

  const date = parseInt(new Date().toISOString().slice(0, 10));
  const [changeDate, setChangeDate] = useState(0);
  const [tasks, setTasks] = useState<Task[]>([]);
  const fetchTasks = async () => {
    const response = await fetch(urlHome);

    const result = (await response.json()) as { taskList: Task[] };
    setTasks(result.taskList);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const handleClickNext = () => {
    setChangeDate(changeDate + 1);
  };

  const handleClickPrev = () => {
    setChangeDate(changeDate - 1);
  };

  return (
    <div className={cx('home')}>
      <button onClick={handleClickPrev} className={cx('button-prev')}>
        <img src={arrowBefore} alt="previous page" />
      </button>
      <FirstPage tasks={tasks} changeDate={changeDate} />
      <SecondPage tasks={tasks} changeDate={changeDate} />
      <button onClick={handleClickNext} className={cx('button-next')}>
        <img src={arrowNext} alt="next page" />
      </button>
      <button onClick={handleLogout} className={cx('button-logout')}>
        <img src={logout} alt="logout icon" />
      </button>
    </div>
  );
};
