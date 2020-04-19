import React, { useState } from 'react';
import { Page } from '../../../core/components/page/page';
import { GetDate } from '../date/get-date';

import { TaskList } from '../Task-list/task-list';

interface Task {
  task: string;
  date: string;
  finished: boolean;
  username: string;
  _id: string;
}
interface Props {
  tasks: Task[];
}

export const FirstPage: React.FunctionComponent<Props> = props => {
  console.log(props.tasks);
  const [tasks, setTasks] = useState<Task[]>(props.tasks);

  console.log(tasks);

  return (
    <Page>
      <GetDate />
      <TaskList tasks={props.tasks} />
    </Page>
  );
};
