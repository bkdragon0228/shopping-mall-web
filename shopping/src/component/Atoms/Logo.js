import React from 'react';
import styled from 'styled-components';

const Logo = () => {
    const Img = styled.img`
        max-width: 800px;
        max-height: 200px;
    `;

    return (
        <div>
            <a href="/">
                <Img src="images/bkmall-logo.png"></Img>
            </a>
        </div>
    );
};

export default Logo;
