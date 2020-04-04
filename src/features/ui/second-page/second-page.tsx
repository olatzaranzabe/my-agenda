import React from 'react';
import { Page } from '../../../core/components/page/page';
import { GetDate } from '../date/get-date';
import { TaskList } from '../Task-list/task-list';

export const SecondPage: React.FunctionComponent = () => {
  console.log('secondpage');
  return (
    <Page>
      <GetDate />
      <div>
        <TaskList />
      </div>
    </Page>
  );
};
