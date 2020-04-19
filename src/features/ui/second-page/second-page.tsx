import React from 'react';
import { Page } from '../../../core/components/page/page';
import { GetTomorrow } from '../date/get-tomorrow';
import { TaskList } from '../Task-list/task-list';

export const SecondPage: React.FunctionComponent = () => {
  return (
    <Page>
      <GetTomorrow />
      <div>{/* <TaskList /> */}</div>
    </Page>
  );
};
