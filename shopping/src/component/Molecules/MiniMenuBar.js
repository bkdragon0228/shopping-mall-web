import React from 'react';
import styled from 'styled-components';
import Menu from '../Atoms/Menu';

const MiniMenuBar = () => {
    return (
        <div>
            <Menu name="login" fontSize="12px" fontWeight="600" />
            <Menu name="join" fontSize="12px" fontWeight="600" />
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
};

export default MiniMenuBar;
