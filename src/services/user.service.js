import axios from 'axios';
import authHeader from './auth-header';

const API_URL = '/api/';
const user = JSON.parse(localStorage.getItem('user'));


const getRegistery = () => {
    return axios.get(API_URL + 'registery', { headers: authHeader() });
}

const deleteEntries = () => {
    return axios.post(API_URL + 'delete', {params: {userId: user.id}}, { headers: authHeader() });
}

const register = (username, email, password, roles) => {
    return axios.post(API_URL + "signup", {params: {userId: user.id}}, { headers: authHeader() }, {
        username,
        email,
        password,
        roles
    });
}

export default {getRegistery,deleteEntries,register};