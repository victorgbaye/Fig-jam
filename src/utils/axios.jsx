import axios from "axios";
const customFetch = axios.create({
    baseURL: 'https://fig-plug-api.onrender.com/api/v1',
})

export default customFetch;