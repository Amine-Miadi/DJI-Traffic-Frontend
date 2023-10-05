/* eslint-disable no-unused-vars */
import axios from "axios";

const API_URL = "https://concise-emblem-395909.oa.r.appspot.com/api/auth/";



const logout = () => {
    localStorage.removeItem("user");
}

const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem('user'));
}

  
export default {logout,getCurrentUser};