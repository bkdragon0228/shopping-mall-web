import React from 'react';
import Logo from '../Atoms/Logo';
import MenuBar from '../Molecules/MenuBar';
import styled from 'styled-components';
import MiniMenuBar from '../Molecules/MiniMenuBar';

const Header = () => {
    const Header = styled.div`
        width: 1000px;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    `;
    return (
        <Header>
            <Logo />
            <MenuBar />
            <MiniMenuBar />
        </Header>
    );
};

export default Header;
