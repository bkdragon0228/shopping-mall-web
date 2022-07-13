import React from 'react';
import styled from 'styled-components';

const Img = styled.img`
    width: 1000px;
    height: 500px;
    // object-fit: cover;
`;

const Image = (props) => {
    return <Img src={props.src}></Img>;
};

export default Image;
