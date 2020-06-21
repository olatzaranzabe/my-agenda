const localUsername = sessionStorage.getItem('username');

const urlHome = `https://my-agenda-app.herokuapp.com/auth/home/:${localUsername}`;

function client(endpoint, { body, ...customConfig } = {}) {
  const headers = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  };
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
}

export { getTaskList };
