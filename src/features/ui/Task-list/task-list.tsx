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
  onSubmitTask(): void;
}

export const TaskList: React.FunctionComponent<Props> = ({
  onSubmitTask,
  pagedate,
  tasks
}) => {
  return (
    <div>
      {tasks.map(task => (
        <TaskComponent
          onSubmitTask={onSubmitTask}
          key={task._id}
          id={task._id}
          taskText={task.task}
          checked={task.finished}
          pagedate={pagedate}
        ></TaskComponent>
      ))}
      <TaskComponent
        onSubmitTask={onSubmitTask}
        pagedate={pagedate}
        id={''}
        taskText={''}
        checked={false}
      ></TaskComponent>
    </div>
  );
};
