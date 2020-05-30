// import { client } from './api-client';
import Task from './task';

// function create(listItemData) {
//   return client('list-items', { body: listItemData });
// }
// function read() {
//   return client('list-items');
// }
// function update(listItemId, updates) {
//   return client(`list-items/${listItemId}`, {
//     method: 'PUT',
//     body: updates
//   });
// }
// function remove(listItemId) {
//   return client(`list-items/${listItemId}`, { method: 'DELETE' });
// }

const localUsername = sessionStorage.getItem('username');

const urlHome = `http://localhost:5000/auth/home/:${localUsername}`;

function client(endpoint, { body, ...customConfig } = {}) {
  const headers = { 'Content-Type': 'application/json' };
  const config = {
    method: body ? 'POST' : 'GET',
    ...customConfig,
    headers: {
      ...headers,
      ...customConfig.headers
    }
  };

  return window.fetch(urlHome, config).then(async response => {
    const data = await response.json();
    if (response.ok) {
      return data;
    } else {
      return Promise.reject(data);
    }
  });
}

function getTaskList() {
  return client(urlHome, { body: false });
  // .then(data =>
  //   console.log('here are the books', data)
  // );
}

export { getTaskList };
