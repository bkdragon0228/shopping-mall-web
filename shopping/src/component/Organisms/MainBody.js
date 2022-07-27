import React from 'react';
import styled from 'styled-components';
import ClothesMain from '../Molecules/ClothesMain';
import MainMenu from '../Molecules/MainMenu';

import { Col, Divider, Row } from 'antd';

const BodyComponent = styled.div`
    padding: 0;
    width: 1000px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content
`;
const MainBody = () => {
    // 상품 렌딩할곳
    return (
        <BodyComponent>
            <MainMenu />
            <Row gutter={[16, 16]}></Row>
        </BodyComponent>
    );
};

export default MainBody;
