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

export const SecondPage: React.FunctionComponent<Props> = props => {
  const [tomorrowDate, setTomorrowDate] = useState('');
  const [currentMonth, setMonth] = useState('');

  const a = new Date();
  a.setDate(props.showDate.getDate() + 1 + props.changeDate);
  const pagedate = a.toISOString().slice(0, 10);

  const newList = props.tasks.filter(task => {
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
    const plusOneDay = props.showDate.getTime() + 86400000;
    const month = monthNames[new Date(plusOneDay).getMonth()];
    setTomorrowDate(a.toISOString().slice(8, 10));
    setMonth(month);
  });

  return (
    <Page>
      <div>
        <p className={cx('date')}>
          <span className={cx('date-number')}>{tomorrowDate}</span> de{' '}
          {currentMonth}
        </p>
      </div>
      <TaskList
        onSubmitTask={props.onSubmitTask}
        tasks={newList}
        pagedate={pagedate}
      />
    </Page>
  );
};
