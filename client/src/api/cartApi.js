import axios from "axios"
const API = axios.create({ baseURL: "http://localhost:5000" })
API.interceptors.request.use((req) => {
    if (localStorage.getItem('profile')) {
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
    }

    return req;
});
export const getItems = ()=>API.get(`/cart`)
export const deleteItem = (id) => API.patch(`/cart/cartremove/${id}`)
export const addItem = (item)=> API.post(`/cart/cartadd`,item)



