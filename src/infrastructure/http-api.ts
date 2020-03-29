import axios from 'axios';

const httpApi = axios.create({
  baseURL: 'http://localhost:5000'
});

export { httpApi };
