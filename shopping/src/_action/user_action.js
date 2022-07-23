// user와 관련된 액션

import axios from 'axios';
import { LOGIN_USER, REGISTER_USER, AUTH_USER } from './types';

// 액션 함수
export function loginUser(dataToSubmit) {
    const response = axios
        .post('api URI', dataToSubmit)
        .then((res) => res.data);

    return {
        type: LOGIN_USER,
        payload: response,
    };
}

export function registerUser(dataToSubmit) {
    const response = axios
        .post('api URI', dataToSubmit)
        .then((res) => res.data);

    return {
        type: REGISTER_USER,
        payload: response,
    };
}

export function auth() {
    const response = axios.get('api URI').then((res) => res.data);

    return {
        type: AUTH_USER,
        payload: response,
    };
}
