import React from 'react';
import { Page } from '../../../core/components/page/page';
import { GetDate } from '../date/get-date';
import { TaskList } from '../Task-list/task-list';

export const FirstPage: React.FunctionComponent = () => {
  return (
    <Page>
      <GetDate />
      <TaskList />
    </Page>
  );
};
