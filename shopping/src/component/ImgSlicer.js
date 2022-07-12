import React from 'react';
import styles from './ImgSlicer.module.css';

const ImgSlicer = () => {
    return (
        <div className={styles.slider}>
            <input type="radio" name="slider" id="slide1" checked />
            <input type="radio" name="slider" id="slide2" />
            <input type="radio" name="slider" id="slide3" />
            <ul className={styles.imagebox}>
                <li>
                    <img src="images/bigimg.png"></img>
                </li>
                <li>
                    <img src="images/bigimg.png"></img>
                </li>
                <li>
                    <img src="images/bigimg.png"></img>
                </li>
            </ul>
            <div className={styles.bullets}>
                <label for="slide1">&nbsp;</label>
                <label for="slide2">&nbsp;</label>
                <label for="slide3">&nbsp;</label>
            </div>
        </div>
    );
};

export default ImgSlicer;
