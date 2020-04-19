import styles from './task-list.module.css';
import React, { useState, useEffect } from 'react';
import { Task as TaskComponent } from './task';

interface Task {
  task: string;
  date: string;
  finished: boolean;
  username: string;
  _id: string;
}

interface Props {
  tasks: Task[];
  // taskText: string;
  // checked: boolean;
}

interface Props {}

export const TaskList: React.FunctionComponent<Props> = props => {
  console.log(props);
  const [tasks, setTasks] = useState<Task[]>(props.tasks);
  console.log(props.tasks);
  //const tasks = tasks
  //const [tasks, setTasks] = useState<Task[]>([]);

  // const url = 'http://localhost:5000/auth/home';

  // const fetchTasks = async () => {
  //   const response = await fetch(url);
  //   const result = (await response.json()) as { taskList: Task[] };
  //   setTasks(result.taskList);
  // };

  // useEffect(() => {
  //   fetchTasks();
  // }, []);

  return (
    <div>
      {props.tasks.map(task => (
        <TaskComponent
          key={task._id}
          taskText={task.task}
          checked={task.finished}
        ></TaskComponent>
      ))}
    </div>
  );
};
