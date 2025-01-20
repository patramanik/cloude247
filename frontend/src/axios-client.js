
import axios from "axios";

const BASE_URL='http://localhost:8000'
const axiosClient = axios.create({
    // baseURL: ${import.meta.env.BASE_URL}/api
    baseURL: `${BASE_URL}/api`
})



export default axiosClient;
