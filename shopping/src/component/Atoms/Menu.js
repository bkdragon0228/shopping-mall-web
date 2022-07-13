import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const A = styled.a`
    margin-left: 1rem;
    margin-top: 2rem;
    margin-bottom: 2rem;
    font-size: ${(props) => props.fontSize || `14px`};
    color: #000;
    font-weight: ${(props) => props.fontWeight || '800'};
    line-height: 10px;
    letter-spacing: 1px;
    text-decoration: none;
    text-transform: uppercase;
    letter-spacing: 1px;
`;

const Menu = ({ name, ...rest }) => {
    return (
        <A href="##" {...rest}>
            {name}
        </A>
    );
};

export default Menu;
