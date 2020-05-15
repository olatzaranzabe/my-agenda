import axios from 'axios';

const httpApi = axios.create({
  baseURL: 'http://localhost:5000',
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

const localUsername = sessionStorage.getItem('username');
// const urlHome = `http://localhost:5000/auth/home/:${localUsername}`;
const taskList = () => httpApi.get(`/auth/home/${localUsername}`);

console.log(taskList);

export default { taskList };
