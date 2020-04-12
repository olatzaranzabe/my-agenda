import { bind } from '../../../utils/bind';
import styles from './task-list.module.css';
import React, { useState, useEffect } from 'react';

const cx = bind(styles);

interface TaskDto {
  task: any;
  date: string;
  finished: boolean;
  taskDto: string;
  username: string;
  taskList: [];
  x: string;
}
export const Task: React.FunctionComponent = () => {
  const [taskText, setTaskText] = useState<string>('');
  const [checked, setChecked] = useState(false);
  const url = 'http://localhost:5000/auth/home';

  const fetchTasks = async () => {
    const response = await fetch(url);
    const result = (await response.json()) as TaskDto;
    const array = await result.taskList;
    //console.log(array);
    array.map((x: any) => {
      return setTaskText(x.task);
    });
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const handleClick = () => setChecked(!checked);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const date = new Date().toISOString().slice(0, 10);
    const info = JSON.stringify({
      task: taskText,
      username: sessionStorage.getItem('username'),
      date: date,
      finished: checked
    });
    fetch(url, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: info
    })
      .then(res => res.json())
      .then(data => console.log('data', data))
      .catch(err => console.log(err));
  };

  return (
    <>
      <div>
        <form className={cx('task-form')} action="" onSubmit={handleSubmit}>
          <input
            className={cx('checkbox')}
            type="checkbox"
            onClick={handleClick}
            checked={checked}
          />
          <input
            className={cx('task-input')}
            type="text"
            value={taskText}
            onChange={event => setTaskText(event.target.value)}
          />
          <button className={cx('plus-button')} type="submit">
            +
          </button>
        </form>
      </div>
    </>
  );
};
