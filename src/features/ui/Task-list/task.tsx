import { bind } from '../../../utils/bind';
import styles from './task-list.module.css';
import React, { useState } from 'react';

const cx = bind(styles);

interface Props {
  onCreate(taskText: string): void;
  key: number;
  data: string;
  checkboxClick: boolean;
}

export const Task: React.FunctionComponent<Props> = ({ onCreate }) => {
  const [taskText, setTaskText] = useState<string>('');
  const [checked, setChecked] = useState(false);
  const handleClick = () => setChecked(!checked);
  const handleSubmit = event => {
    event.preventDefault();
    if (!taskText) return;
    setTaskText(event.target.value);
  };
  return (
    <>
      <p>hola</p>
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
