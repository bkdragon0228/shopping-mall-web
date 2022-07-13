import React from 'react';
import styled from 'styled-components';
import ClothesMain from '../Molecules/ClothesMain';
import MainMenu from '../Molecules/MainMenu';

const BodyComponent = styled.div`
    padding: 0;
    width: 1000px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content
`;
const MainBody = () => {
    return (
        <BodyComponent>
            <MainMenu />
            <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                <ClothesMain />
                <ClothesMain />
                <ClothesMain />
                <ClothesMain />
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                <ClothesMain />
                <ClothesMain />
                <ClothesMain />
                <ClothesMain />
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                <ClothesMain />
                <ClothesMain />
                <ClothesMain />
                <ClothesMain />
            </div>
        </BodyComponent>
    );
};

export default MainBody;
