import React, { useState, useEffect } from 'react';
import { Page } from '../../../core/components/page/page';
import { TaskList } from '../Task-list/task-list';
import { bind } from '../../../utils/bind';
import styles from './first-page.module.css';
const cx = bind(styles);

interface Task {
  task: string;
  date: any;
  finished: boolean;
  username: string;
  _id: string;
}
interface Props {
  tasks: Task[];
}

export const FirstPage: React.FunctionComponent<Props> = props => {
  const [tasks, setTasks] = useState<Task[]>(props.tasks);
  const [currentDate, setDate] = useState('');
  const [currentYear, setYear] = useState('');
  const [currentMonth, setMonth] = useState('');
  let a = new Date();

  const pagedate = a.toISOString().slice(0, 10);

  console.log('pagedateeee', pagedate);
  const newList = props.tasks.filter(task => {
    return task.date === pagedate;
  });

  console.log('newList', newList);
  //setTasks(newList);
  const monthNames = [
    'Enero',
    'Febrero',
    'Marzo',
    'Abril',
    'Mayo',
    'Junio',
    'Julio',
    'Agosto',
    'Septiembre',
    'Octubre',
    'Noviembre',
    'Diciembre'
  ];

  useEffect(() => {
    const date = new Date().toISOString().slice(8, 10);
    const year = new Date().toISOString().slice(0, 4);
    const m = new Date();
    const month = monthNames[m.getMonth()];
    setYear(year);
    setDate(date);
    setMonth(month);
  }, []);

  return (
    <Page>
      <div className={cx('date-div')}>
        <p className={cx('date-year')}>Año {currentYear}</p>
        <p className={cx('date')}>
          <span className={cx('date-number')}>{currentDate}</span> de{' '}
          {currentMonth}
        </p>
      </div>
      <TaskList tasks={newList} pagedate={pagedate} />
    </Page>
  );
};
