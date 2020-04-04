import { bind } from '../../../utils/bind';
import styles from './task-list.module.css';
import React, { useState, useEffect } from 'react';

const cx = bind(styles);

export const Task: React.FunctionComponent = () => {
  const [taskText, setTaskText] = useState<string>('');
  const [checked, setChecked] = useState(false);
  const handleClick = () => setChecked(!checked);

  const url = 'http://localhost:5000/';

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!taskText) return;
    const date = new Date().toISOString();
    fetch(url, {
      method: 'POST',
      headers: new Headers(),
      body: JSON.stringify({
        task: setTaskText,
        username: 'x',
        date: date,
        finished: setChecked
      })
    })
      .then(res => res.json())
      .then(data => console.log(data))
      .catch(err => console.log(err));
  };

  return (
    <>
      <div>
        <form action="" onSubmit={handleSubmit}>
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
          <button type="submit">Add</button>
        </form>
      </div>
    </>
  );
};
