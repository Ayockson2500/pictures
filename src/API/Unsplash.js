import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID WWITqGYpBQigtIWLZuNPrBigIirTWo2rJLd-easFC4k'
    }
});