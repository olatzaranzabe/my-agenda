import { bind } from '../../../utils/bind';
import styles from './first-page.module.css';
import React, { useEffect } from 'react';
import { Page } from '../../../core/components/page/page';
import { GetDate } from '../date/getDate';
import { TaskList } from '../Task-list/task-list';

const cx = bind(styles);

interface Props {
  onClick(): void;
}

export const FirstPage: React.FunctionComponent = () => {
  const fetchInfo = async () => {
    console.log('fetching');
  };
  useEffect(() => {
    fetchInfo();
  });

  return (
    <Page>
      <GetDate></GetDate>
      <p>hola</p>
      <div>
        <TaskList></TaskList>
      </div>
    </Page>
  );
};
