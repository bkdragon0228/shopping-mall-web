import React from 'react';
import styled from 'styled-components';
import Menu from '../Atoms/Menu';

const Menus = styled.div`
    margin-top: 2rem;
    display: flex;
    justify-content: center;
`;
const MainMenu = () => {
    return (
        <Menus>
            <Menu name="new" fontWeight="500" />
            <Menu name="best" fontWeight="500" />
            <Menu name="cody" fontWeight="500" />
        </Menus>
    );
};

export default MainMenu;
