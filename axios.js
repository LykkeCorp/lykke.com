import axios from 'axios'
import getConfig from 'next/config'
const {publicRuntimeConfig} = getConfig()
const { SELF_URL, BASE_API_URL} = publicRuntimeConfig

const axiosInstance = axios.create({
    baseURL: BASE_API_URL
});

export default axiosInstance;