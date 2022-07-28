import axios from 'axios';
import React, { useEffect } from 'react';
import Header from './Header';
import MainBody from './MainBody';

const MainPage = () => {
    return (
        <div>
            <Header />
            <MainBody />
        </div>
    );
};

export default MainPage;
