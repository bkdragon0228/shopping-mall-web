import React from 'react';
import styled from 'styled-components';

const Img = styled.img`
    width: ${(props) => props.width || '1000px'};
    height: ${(props) => props.height || `500px`};
    object-fit: cover;
`;

const Image = ({ src, ...rest }) => {
    return <Img src={src} {...rest}></Img>;
};

export default Image;
