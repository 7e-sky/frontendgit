import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://backendgit-qyld3f9nj-7e-skys-projects.vercel.app', // URL de votre backend
    headers: {
        'Content-Type': 'application/json',
    },
});

export default instance;
