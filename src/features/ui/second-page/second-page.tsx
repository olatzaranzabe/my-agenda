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
}

export const SecondPage: React.FunctionComponent<Props> = props => {
  const [tomorrowDate, setTomorrowDate] = useState('');
  const [currentMonth, setMonth] = useState('');

  let a = new Date();
  a.setDate(a.getDate() + 1);
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

  useEffect(() => {
    setTomorrowDate(pagedate.slice(8, 10));
    const m = new Date();
    const month = monthNames[m.getMonth()];
    setMonth(month);
  }, []);

  return (
    <Page>
      <div>
        <p className={cx('date')}>
          <span className={cx('date-number')}>{tomorrowDate}</span> de{' '}
          {currentMonth}
        </p>
      </div>
      <TaskList tasks={newList} pagedate={pagedate} />
    </Page>
  );
};
