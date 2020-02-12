import axios from 'axios';

export default axios.create({
    baseURL: 'http://localhost:3001',
    validateStatus: function (status) {
        return status < 400; // default
    },
})