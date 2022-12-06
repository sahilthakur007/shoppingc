import axios from "axios"
const API = axios.create({ baseURL: "http://localhost:5000" })
API.interceptors.request.use((req) => {
    if (localStorage.getItem('profile')) {
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
    }

    return req;
});
export const signup = (userData) => API.post("/user/signup",userData) 
export const signin = (userData) => API.post("/user/signin",userData) 