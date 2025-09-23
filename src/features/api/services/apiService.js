// src/features/api/services/api.js
import axios from 'axios';

//const BASE_URL = 'http://127.0.0.1:8000/api/index/';
const BASE_URL = import .meta.env.VITE_API_URL; // Para deploy com Vite

export const getHello = async () => {
    //const response = await axios.get(BASE_URL);
    //const response = await axios.get(`${BASE_URL}/index/`); // Para deploy com Vite
    const response = await axios.get('/api/index/'); // Para deploy com Vite e proxy no vite.config.js
    return response.data;
};

export const postHello = async (data) => {
    //const response = await axios.post(BASE_URL, data);
    //const response = await axios.get(`${BASE_URL}/index/`); // Para deploy com Vite
    const response = await axios.get('/api/index/'); // Para deploy com Vite e proxy no vite.config.js
    return response.data;
};

