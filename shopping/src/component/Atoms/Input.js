import React from 'react';
import styled, { css } from 'styled-components';

const Inputs = styled.input`
    ${(props) =>
        props.hide &&
        css`
            display: none;
        `}
`;
const Input = ({ type, name, fors, placehold, ...rest }) => {
    return (
        <Inputs
            type={type}
            name={name}
            for={fors}
            placeholder={placehold}
            {...rest}
        />
    );
};

export default Input;
