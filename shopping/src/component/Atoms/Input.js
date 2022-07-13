import React from 'react';
import styled from 'styled-components';

const Inputs = styled.input`
    display: none;
`;
const Input = ({ type, name, fors }) => {
    return <Inputs type={type} name={name} for={fors} />;
};

export default Input;
