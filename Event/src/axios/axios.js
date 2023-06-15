import axios from 'axios'

const axoisInstance = axios.create({
    baseURL:'http://localhost:9000/api'
});

export default axoisInstance;