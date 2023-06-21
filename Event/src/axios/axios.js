import axios from 'axios'

const axoisInstance = axios.create({
    // baseURL:'http://ec2-13-235-77-43.ap-south-1.compute.amazonaws.com:9000/api'
    baseURL:'http://localhost:9000/api'
});

export default axoisInstance;