import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { FirstPage } from '../first-page/first-page';
import { SecondPage } from '../second-page/second-page';
import { bind } from '../../../utils/bind';
import styles from './home.module.css';

const cx = bind(styles);

interface Task {
  task: string;
  date: any;
  finished: boolean;
  username: string;
  _id: string;
}

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
  const localUsername = sessionStorage.getItem('username');
  const urlHome = `http://localhost:5000/auth/home/:${localUsername}`;

  const date = parseInt(new Date().toISOString().slice(0, 10));

  const [tasks, setTasks] = useState<Task[]>([]);
  const fetchTasks = async () => {
    const response = await fetch(urlHome);

    const result = (await response.json()) as { taskList: Task[] };

    // const newList = await result.taskList.filter(task => {
    //   return task.date === date;
    // });
    // await console.log('newList', newList);
    setTasks(result.taskList);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div className={cx('home')}>
      <button className={cx('button-prev')}>prev</button>
      <FirstPage tasks={tasks} />
      <SecondPage tasks={tasks} />
      <button className={cx('button-next')}>next</button>
      <button onClick={handleLogout} className={cx('button-logout')}>
        Cerrar sesión
      </button>
    </div>
  );
};
