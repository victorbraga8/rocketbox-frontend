import axios from 'axios';
const api = axios.create({
    baseURL: 'https://rocketbox-victorbraga.herokuapp.com',
});

export default api;