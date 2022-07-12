import React from 'react';
import styled from 'styled-components';
import Menu from '../Atoms/Menu';

const MiniMenuBar = () => {
    return (
        <div>
            <Menu name="login" />
            <Menu name="join" />
            <Menu name="cart" />
            <Menu name="mypage" />
            <Menu name="notice" />
            <Menu name="입고지연" />
            <Menu name="q & a" />
            <Menu name="review" />
            <Menu name="event" />
            <Menu name="검색" />
        </div>
    );
};

export default MiniMenuBar;
