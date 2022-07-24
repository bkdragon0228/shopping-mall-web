// user와 관련된 리듀서

import {
    LOGIN_USER,
    REGISTER_USER,
    AUTH_USER,
    LOGOUT_USER,
} from '../_action/types';

const initalState = {};

// state를 새로 저장하는것. state에 값이 누적되어감
export default function reducer(state = initalState, action) {
    switch (action.type) {
        case LOGIN_USER:
            return { ...state, loginSuccess: action.payload };

        // 큰 의미는 없는것 같은게 어차피 인증이 풀린다.
        case LOGOUT_USER:
            return { ...state, loginSuccess: false };

        case REGISTER_USER:
            return { ...state, register: action.payload };

        case AUTH_USER:
            return { ...state, userData: action.payload };

        default:
            return state;
    }
}
