// src/features/api/services/api.js
import axios from 'axios';

//const BASE_URL = 'http://127.0.0.1:8001/api/index/';
const BASE_URL = import.meta.env.VITE_API_URL; // Para deploy com Vite
/*
export const getHello = async () => {
  console.log('API URL:', import.meta.env.VITE_API_URL);
  return { message: 'Hello World (sem conexão com backend)' };
};
*/
export const getHello = async () => {
    //const response = await axios.get(BASE_URL);
    const response = await axios.get(`${BASE_URL}/index/`); // Para deploy com Vite
    console.log('API URL:', import.meta.env.VITE_API_URL);
    return response.data;
};

export const postHello = async (data) => {
    //const response = await axios.post(BASE_URL, data);
    const response = await axios.post(`${BASE_URL}/index/`); // Para deploy com Vite
    return response.data;
};

