// src/api/axiosConfig.js
import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://dev.3findustrie.com/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default instance;
