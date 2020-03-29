import { bind } from '../../../utils/bind';
import styles from './task-list.module.css';
import React, { useState } from 'react';
import { Task } from './task';

const cx = bind(styles);

const [tasks, setTasks] = useState([
  {
    text: '',
    checked: false
  },
  {
    text: '',
    checked: false
  },
  {
    text: '',
    checked: false
  },
  {
    text: '',
    checked: false
  },
  {
    text: '',
    checked: false
  },
  {
    text: '',
    checked: false
  }
]);

export const TaskList: React.FunctionComponent = () => {
  return;
  <div>
    {tasks.map((task, index) => (
      <Task key={index} task={task}></Task>
    ))}
  </div>;
};
