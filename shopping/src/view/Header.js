import React from 'react';
import styles from './Header.module.css';

const Header = () => {
    return (
        <header>
            <div className="Header-logo">
                <img className={styles.logo} src="images/bkmall-logo.png"></img>
            </div>
            <div className={styles.headerBar}>
                <ul className={styles.category}>
                    <li>
                        <a>22'SUMMER</a>
                    </li>
                    <li>
                        <a>MADE</a>
                    </li>
                    <li>
                        <a>ALL</a>
                    </li>
                    <li>
                        <a>NEW</a>
                    </li>
                    <li>
                        <a>BEST</a>
                    </li>
                    <li>
                        <a>당일출고</a>
                    </li>
                    <li>
                        <a>OUTER</a>
                    </li>
                    <li>
                        <a>TOP</a>
                    </li>
                    <li>
                        <a>BOTTOM</a>
                    </li>
                    <li>
                        <a>SHOES&BAG</a>
                    </li>
                    <li>
                        <a>ACC</a>
                    </li>
                    <li>
                        <a>검색될 상품</a>
                    </li>
                </ul>
            </div>
            <div className={styles.myMenu}>
                <ul>
                    <li>
                        <a>login</a>
                    </li>
                    <li>
                        <a>join</a>
                    </li>
                    <li>
                        <a>cart</a>
                    </li>
                    <li>
                        <a>mypage</a>
                    </li>
                    <li>
                        <a>notice</a>
                    </li>
                    <li>
                        <a>입고지연</a>
                    </li>
                    <li>
                        <a>Q & A</a>
                    </li>
                    <li>
                        <a>review</a>
                    </li>
                    <li>
                        <a>event</a>
                    </li>
                </ul>
            </div>
        </header>
    );
};

export default Header;
