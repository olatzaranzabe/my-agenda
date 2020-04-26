import styles from './task-list.module.css';
import React, { useState, useEffect } from 'react';
import { Task as TaskComponent } from './task';

interface Task {
  task: string;
  date: Date;
  finished: boolean;
  username: string;
  _id: string;
}

interface Props {
  tasks: Task[];
  pagedate: any;
}

export const TaskList: React.FunctionComponent<Props> = props => {
  return (
    <div>
      {props.tasks.map(task => (
        <TaskComponent
          id={task._id}
          taskText={task.task}
          checked={task.finished}
          pagedate={props.pagedate}
        ></TaskComponent>
      ))}
      <TaskComponent
        pagedate={props.pagedate}
        id={''}
        taskText={''}
        checked={false}
      ></TaskComponent>
    </div>
  );
};
