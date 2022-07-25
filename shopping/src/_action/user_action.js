// user와 관련된 액션

import axios from 'axios';
import { LOGIN_USER, REGISTER_USER, AUTH_USER, LOGOUT_USER } from './types';

// 액션 함수
export function loginUser(dataToSubmit) {
    const response = axios
        .post('/api/user/login', dataToSubmit)
        .then((res) => res.data);

    return {
        type: LOGIN_USER,
        payload: response,
    };
}

export function logoutUser() {
    const response = axios.get('/api/user/logout').then((res) => res.data);

    return {
        type: LOGOUT_USER,
        payload: response,
    };
}

export function registerUser(dataToSubmit) {
    const response = axios
        .post('/api/user/register', dataToSubmit)
        .then((res) => res.data);

    return {
        type: REGISTER_USER,
        payload: response,
    };
}

export function auth() {
    const response = axios.get('/api/user/auth').then((res) => res.data);

    return {
        type: AUTH_USER,
        payload: response,
    };
}
