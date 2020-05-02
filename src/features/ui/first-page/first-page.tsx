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
  changeDate: number;
}

export const FirstPage: React.FunctionComponent<Props> = props => {
  // let pagedate;
  console.log('changedate', props.changeDate);
  const [tasks, setTasks] = useState<Task[]>(props.tasks);
  const [currentDate, setDate] = useState('');
  const [currentYear, setYear] = useState('');
  const [currentMonth, setMonth] = useState('');

  let a = new Date();
  a.setDate(a.getDate() + props.changeDate);
  const pagedate = a.toISOString().slice(0, 10);

  const newList = props.tasks.filter(task => {
    return task.date === pagedate;
  });

  useEffect(() => {
    const date = a.toISOString().slice(8, 10);
    const year = a.toISOString().slice(0, 4);
    const month = monthNames[a.getMonth()];
    setYear(year);
    setDate(date);
    setMonth(month);
  });

  console.log('newList', newList);

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
