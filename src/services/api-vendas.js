import axios from 'axios';

const api = axios.create({
    baseURL: 'http://www.mocky.io/v2/5e960a2d2f0000f33b0257c4',
})

export default api;