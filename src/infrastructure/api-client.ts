import axios from 'axios';

const config = {
  headers: { 'Access-Control-Allow-Origin': '*' }
};

const httpApi = axios.create({
  baseURL: 'http://my-agenda-app.herokuapp.com/',
  withCredentials: true
});

httpApi.interceptors.response.use(
  response => response.data,
  error => {
    if (error.response && error.response.status === 401) {
      localStorage.clear();
      window.location.assign('/login');
    }

    return Promise.reject(error);
  }
);

const logout = () => httpApi.post('/logout');
const login = () => httpApi.post('auth/login');

export default { logout, login };
