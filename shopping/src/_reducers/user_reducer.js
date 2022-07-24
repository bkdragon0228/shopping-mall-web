// user와 관련된 리듀서

import {
    LOGIN_USER,
    REGISTER_USER,
    AUTH_USER,
    LOGOUT_USER,
} from '../_action/types';

const initalState = {};

export default function reducer(state = initalState, action) {
    switch (action.type) {
        case LOGIN_USER:
            return { ...state, loginSuccess: action.payload };

        case LOGOUT_USER:
            return { ...state, logoutSuccess: action.payload };

        case REGISTER_USER:
            return { ...state, register: action.payload };

        case AUTH_USER:
            return { ...state, userData: action.payload };

        default:
            return state;
    }
}
