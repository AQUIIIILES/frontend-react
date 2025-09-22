// src/features/usuarios/services/api.js
import axios from 'axios';

const BASE_URL = 'http://localhost:8000/api/usuarios/';

export const getUsuarios = () => axios.get(BASE_URL);
