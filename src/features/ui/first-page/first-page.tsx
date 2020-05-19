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
  const [currentDate, setDate] = useState(0);
  const [currentYear, setYear] = useState('');
  const [currentMonth, setMonth] = useState('');
  const a = showDate;

  const multiple = changeDate * 86400000;

  const dateToShow = new Date(showDate.getTime() + multiple);
  const dateToSave = new Date(showDate.getTime() + multiple);
  console.log('save', dateToSave);

  // const pagedate = dateToSave.toISOString().slice(0, 10);

  // console.log(dateToSave.getFullYear().toString());
  // console.log(dateToSave.getMonth().toString());
  // console.log(dateToSave.getDay().toString());
  // console.log(
  //   `${dateToSave.getFullYear().toString()}-` +
  //     `${dateToSave.getMonth().toString()}-` +
  //     `${dateToSave.getDay().toString()}`
  // );

  const pagedate =
    `${dateToSave.getFullYear().toString()}-` +
    `${(dateToSave.getMonth() + 1).toString()}-` +
    `${dateToSave.getDate().toString()}`;
  console.log('ss', dateToSave);
  console.log('tt', pagedate);
  const newList = tasks.filter(task => {
    return task.date === pagedate;
  });

  useEffect(() => {
    const year = showDate.toISOString().slice(0, 4);
    setYear(year);
    setDate(dateToShow.getDate());
    const month = monthNames[dateToShow.getMonth()];
    setMonth(month);
  }, [showDate, changeDate]);

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
