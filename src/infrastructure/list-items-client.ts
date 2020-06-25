import { client } from './client';

function getTaskList() {
  const localUsername = sessionStorage.getItem('username');

  const urlHome = `https://my-agenda-app.herokuapp.com/auth/home/:${localUsername}`;
  return client(urlHome);
}

export { getTaskList };
