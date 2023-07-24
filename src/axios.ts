import Axios from 'axios';

export const axios = Axios.create({
  baseURL: 'http://localhost:7025/api',
});
