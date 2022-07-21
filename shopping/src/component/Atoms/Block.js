import React from 'react';
import styled from 'styled-components';

const Square = styled.div`
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    background-color: ${(props) => props.color};
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Block = ({ children, color, width, height, ...rest }) => {
    return (
        <Square color={color} width={width} height={height}>
            {children}
        </Square>
    );
};

export default Block;
