import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { auth } from '../_action/user_action';

export default function Auth(SpecificComponent, option, adminRoute = null) {
    function AuthenticationCheck(props) {
        const dispatch = useDispatch();
        const navi = useNavigate();

        // 이제 user안의 userData는 시작부터 들어가있다. 빈 객체로
        useEffect(() => {
            dispatch(auth()).then((res) => {
                // 로그인 x
                if (!res.payload.isAuth) {
                    // 로그인한 유저만 출입가능함
                    if (option) {
                        navi('/login');
                    }
                } else {
                    //로그인 0
                    // 관리자 영역 출입 불가
                    if (adminRoute && !res.payload.isAdmin) {
                        navi('/');
                    } else {
                        // 로그인한 유저 출입 불가능
                        if (!option) {
                            navi('/');
                        }
                    }
                }
            });
        }, []);

        return <SpecificComponent />;
    }

    return AuthenticationCheck;
}
