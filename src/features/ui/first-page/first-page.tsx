import React from 'react';
import { Page } from '../../../core/components/page/page';
import { GetDate } from '../date/get-date';
import { TaskList } from '../Task-list/task-list';

export const FirstPage: React.FunctionComponent = () => {
  console.log('firstpage');
  return (
    <Page>
      <GetDate />
      <p>hola</p>
      <div>
        <TaskList />
      </div>
    </Page>
  );
};
