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
  showDate: any;
  onSubmitTask(): void;
}

export const FirstPage: React.FunctionComponent<Props> = ({
  tasks,
  showDate,
  changeDate,
  onSubmitTask
}) => {
  // const [currentTasks, setCurrentTasks] = useState<Task[]>(tasks);
  const [currentDate, setDate] = useState('');
  const [currentYear, setYear] = useState('');
  const [currentMonth, setMonth] = useState('');
  const a = new Date();
  a.setDate(showDate.getDate() + changeDate);

  const pagedate = a.toISOString().slice(0, 10);

  const newList = tasks.filter(task => {
    return task.date === pagedate;
  });

  useEffect(() => {
    const year = showDate.toISOString().slice(0, 4);
    setYear(year);
    setDate(pagedate.slice(8, 10));
    //console.log(pagedate.slice(5, 7));
    console.log('m', showDate.getMonth());
    const month = monthNames[showDate.getMonth()];
    setMonth(month);
  });

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
      <TaskList
        onSubmitTask={onSubmitTask}
        tasks={newList}
        pagedate={pagedate}
      />
    </Page>
  );
};
