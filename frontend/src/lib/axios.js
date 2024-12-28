import axios from "axios"

export const axiosInstance = axios.create({
    baseURL : "http://localhost:5173/api",
    withCredentials:true,
})