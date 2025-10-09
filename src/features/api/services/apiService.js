// src/features/api/services/api.js
import axios from 'axios';
import { apiUrl } from '../../../helpers/apiUrl.js'; // Importa a função apiUrl

//const BASE_URL = 'http://127.0.0.1:8001/';

export const getHello = async () => {
    try {
        //const response = await axios.get(BASE_URL+'api/');
        //console.log('Response:', response);
        const response = await axios.get(apiUrl('api')); // Para deploy com Vite
        console.log('API URL:', apiUrl('api'));
        return response.data;
    } catch (error) {
        console.error('Erro ao chamar a API:', error);
        throw error;
    }
};

export const postHello = async (data) => {
    try {
        //const response = await axios.post(BASE_URL, data);
        //console.log('Response:', response);
        const response = await axios.post(apiUrl('api')); // Para deploy com Vite
        console.log('API URL:', apiUrl('api'));
        return response.data;
    } catch (error) {
        console.error('Erro ao chamar a API:', error);
        throw error;
    }
};

