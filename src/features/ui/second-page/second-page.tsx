import React, { useEffect, useState } from 'react';
import { Page } from '../../../core/components/page/page';
import { TaskList } from '../Task-list/task-list';
import { bind } from '../../../utils/bind';
import styles from './second-page.module.css';

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

export const SecondPage: React.FunctionComponent<Props> = ({
  changeDate,
  showDate,
  tasks,
  onSubmitTask
}) => {
  const [tomorrowDate, setTomorrowDate] = useState(0);
  const [currentMonth, setMonth] = useState('');
  const a = new Date(showDate);
  const dateToShow = new Date(a.setDate(showDate.getDate() + 1 + changeDate));
  a.setDate(showDate.getDate() + 1 + changeDate);

  const dateToSave = new Date(a.setDate(showDate.getDate() + 1 + changeDate));

  // const pagedate = dateToSave.toISOString().slice(0, 10);

  const pagedate =
    `${dateToSave.getFullYear().toString()}-` +
    `${(dateToSave.getMonth() + 1).toString()}-` +
    `${dateToSave.getDate().toString()}`;
  console.log(pagedate);
  const newList = tasks.filter(task => {
    return task.date === pagedate;
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

  console.log('newlist', newList);
  useEffect(() => {
    const month = monthNames[dateToShow.getMonth()];
    setTomorrowDate(dateToShow.getDate());
    setMonth(month);
  }, [showDate, changeDate]);

  return (
    <Page>
      <div>
        <p className={cx('date')}>
          <span className={cx('date-number')}>{tomorrowDate}</span> de{' '}
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
