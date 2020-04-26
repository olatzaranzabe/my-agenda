import { bind } from '../../../utils/bind';
import styles from './task-list.module.css';
import React, { useState, useEffect } from 'react';

const cx = bind(styles);

interface Props {
  taskText: string;
  checked: boolean;
  id: string;
  pagedate: any;
}

export const Task: React.FunctionComponent<Props> = props => {
  const [taskText, setTaskText] = useState<string>(props.taskText);
  const [checked, setChecked] = useState(props.checked);
  const [id, setId] = useState(props.id);

  const date = props.pagedate;
  console.log(date);
  const url = 'http://localhost:5000/auth/home';

  const handleClick = () => setChecked(!checked);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    //event.preventDefault();
    const info = JSON.stringify({
      task: taskText,
      username: sessionStorage.getItem('username'),
      date: date,
      finished: checked,
      id: id
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
            id={id}
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
