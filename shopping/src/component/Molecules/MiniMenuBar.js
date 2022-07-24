import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logoutUser } from '../../_action/user_action';
import Menu from '../Atoms/Menu';

const MiniMenuBar = () => {
    const user = useSelector((state) => state.user);
    const dispatch = useDispatch();
    const navi = useNavigate();

    const logoutHandler = () => {
        dispatch(logoutUser).then((res) => {
            if (res.payload.success) {
                navi('/login');
            } else {
                alert('fail to sign out');
            }
        });
    };

    if (user.userData && !user.userData.isAuth) {
        // 아직 유저데이터가 없어서 로그아웃이 뜸
        return (
            <div>
                <Menu
                    name="login"
                    fontSize="12px"
                    fontWeight="600"
                    to="/login"
                />
                <Menu
                    name="join"
                    fontSize="12px"
                    fontWeight="600"
                    to="/register"
                />
                <Menu name="cart" fontSize="12px" fontWeight="600" />
                <Menu name="mypage" fontSize="12px" fontWeight="600" />
                <Menu name="notice" fontSize="12px" fontWeight="600" />
                <Menu name="입고지연" fontSize="12px" fontWeight="600" />
                <Menu name="q & a" fontSize="12px" fontWeight="600" />
                <Menu name="review" fontSize="12px" fontWeight="600" />
                <Menu name="event" fontSize="12px" fontWeight="600" />
                <Menu name="검색" fontSize="12px" fontWeight="600" />
            </div>
        );
    } else {
        return (
            <div>
                <Menu
                    name="logout"
                    fontSize="12px"
                    fontWeight="600"
                    onClick={logoutHandler}
                />
                <Menu name="cart" fontSize="12px" fontWeight="600" />
                <Menu name="mypage" fontSize="12px" fontWeight="600" />
                <Menu name="notice" fontSize="12px" fontWeight="600" />
                <Menu name="입고지연" fontSize="12px" fontWeight="600" />
                <Menu name="q & a" fontSize="12px" fontWeight="600" />
                <Menu name="review" fontSize="12px" fontWeight="600" />
                <Menu name="event" fontSize="12px" fontWeight="600" />
                <Menu name="검색" fontSize="12px" fontWeight="600" />
            </div>
        );
    }
};

export default MiniMenuBar;
