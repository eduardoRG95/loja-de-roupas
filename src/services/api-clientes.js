import axios from 'axios';

const api = axios.create({
    baseURL: 'http://www.mocky.io/v2/5de67e9f370000540009242b',
})

export default api;