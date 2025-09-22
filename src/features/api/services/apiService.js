// src/features/api/services/api.js
import axios from 'axios';

const BASE_URL = 'http://127.0.0.1:8000/api/index/';

export const getHello = async () => {
    const reponse = await axios.get(BASE_URL);
    return reponse.data;
};

export const postHello = async (data) => {
    const reponse = await axios.post(BASE_URL, data);
    return reponse.data;
};

