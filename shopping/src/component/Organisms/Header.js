import React from 'react';
import Logo from '../Atoms/Logo';
import MenuBar from '../Molecules/MenuBar';
import styled from 'styled-components';
import MiniMenuBar from '../Molecules/MiniMenuBar';
import ImgSlider from '../Molecules/ImgSlider';

const Header = () => {
    const Header = styled.div`
        padding: 0;
        width: 1000px;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    `;
    return (
        <>
            <Header>
                <Logo />
                <MenuBar />
                <MiniMenuBar />
            </Header>
            <ImgSlider />
        </>
    );
};

export default Header;
