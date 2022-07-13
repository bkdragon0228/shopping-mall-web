import React from 'react';
import styled from 'styled-components';
import Image from '../Atoms/Image';
import Menu from '../Atoms/Menu';

const ClothesComponet = styled.div`
    display: flex;
    flex-direction: column;
    align-item: center;
`;

const ClothesMain = () => {
    return (
        <ClothesComponet>
            <Image src="images/옷1.png" width="210px" height="270px" />
            <Menu
                name="모어 클로드 윈드자켓"
                fontSize="12px"
                fontWeight="300"
            />
            <Menu name="krw 33,250" fontSize="12px" fontWeight="300" />
        </ClothesComponet>
    );
};

export default ClothesMain;
