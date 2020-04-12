import styles from './task-list.module.css';
import React, { useState, useEffect } from 'react';
import { Task } from './task';

export const TaskList: React.FunctionComponent = () => {
  const range = Array.from({ length: 8 }, (key, value) => value);

  const url = 'http://localhost:5000/auth/home';
  const info = useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => console.log(data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div>
      {range.map((data, index) => (
        <Task key={data}>{data}</Task>
      ))}
    </div>
  );
};
