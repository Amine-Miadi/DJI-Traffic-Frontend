/* eslint-disable no-unused-vars */
import axios from "axios";
import authHeader from "./auth-header";
import { useNavigate, Navigate } from "react-router-dom";

const API_URL = "/api/auth";


const login = (usename,password) => {
    return new Promise ((resolve,reject) => {
        axios.post(`${API_URL}/signin`,{
            username: usename,
            password: password
        }).then(response => {
            localStorage.setItem("user", JSON.stringify(response.data));
            window.location.reload(false);
            resolve(200);
        }).catch(err => resolve(err.response.status));
    });
}

const signup = (usename,password,email,roles) => {
    return new Promise ((resolve,reject) => {
        axios.post(`${API_URL}/signup`,{
            username: usename,
            password: password,
            email: email,
            roles: [roles.toLowerCase()]
        },{headers: authHeader()}).then(response => {
            resolve(200);
        }).catch(err => resolve(err.response.status));
    });
}

const logout = () => {
    localStorage.removeItem("user");
}

const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem('user'));
}

  
export default {logout,login,signup,getCurrentUser};