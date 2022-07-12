import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Menu = (props) => {
    const A = styled.a`
        margin-left: 1rem;
        font-size: 14px;
        color: #000;
        font-weight: 800;
        line-height: 10px;
        letter-spacing: 1px;
        text-decoration: none;
        text-transform: uppercase;
        letter-spacing: 1px;
    `;
    return <A href="##">{props.name}</A>;
};

export default Menu;
