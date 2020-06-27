import { bind } from '../../../utils/bind';
import styles from './task-list.module.css';
import React, { useState } from 'react';

const cx = bind(styles);
interface TaskModel {
  taskText: string;
  checked: boolean;
  id: string;
  pagedate: any;
}
interface Props extends TaskModel {
  onSubmitTask(): void;
}

export const Task: React.FunctionComponent<Props> = ({
  taskText,
  pagedate,
  onSubmitTask,
  id,
  checked
}) => {
  const [text, setText] = useState<string>(taskText);
  const [taskChecked, setTaskChecked] = useState(checked);
  const [taskId, setTaskId] = useState(id);

  const date = pagedate;

  const url = 'https://my-agenda-app.herokuapp.com/auth/home';

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const info = {
      task: text,
      username: sessionStorage.getItem('username'),
      date: date,
      finished: taskChecked,
      id: taskId
    };
    fetch(url, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify(info)
    })
      .then(res => res.json())
      .then(data => {
        onSubmitTask();
        setText('');
        setTaskChecked(false);
      })
      .catch(err => console.log(err));
  };

  return (
    <>
      <div>
        <form className={cx('task-form')} onSubmit={handleSubmit}>
          <input
            className={cx('checkbox')}
            type="checkbox"
            onChange={() => setTaskChecked(!taskChecked)}
            checked={taskChecked}
          />
          <input
            className={cx('task-input')}
            type="text"
            value={text}
            id={id}
            onChange={event => setText(event.target.value)}
          />
          <button className={cx('plus-button')} type="submit">
            +
          </button>
        </form>
      </div>
    </>
  );
};
