// src/api/axiosConfig.js
import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://it.3findustrie.com',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default instance;
