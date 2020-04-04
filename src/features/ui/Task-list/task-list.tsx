import { bind } from '../../../utils/bind';
import styles from './task-list.module.css';
import React, { useState } from 'react';
import { Task } from './task';

const cx = bind(styles);

export const TaskList: React.FunctionComponent = () => {
  const range = Array.from({ length: 6 }, (key, value) => value);

  return (
    <div>
      {range.map((key, index) => (
        <Task key={key}></Task>
      ))}
    </div>
  );
};
