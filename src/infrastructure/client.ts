type Options<T> = RequestInit & {
  body: T;
};

export function client<T>(endpoint: string, options?: Options<T>) {
  const localUsername = sessionStorage.getItem('username');

  const urlHome = `https://my-agenda-app.herokuapp.com/auth/home/:${localUsername}`;
  const headers = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  };
  const config = {
    method: options?.body ? 'POST' : 'GET',
    ...options,
    headers: {
      ...headers,
      ...options?.headers
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