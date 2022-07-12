import React from 'react';
import styles from './ImgSlicer.module.css';

const ImgSlicer = () => {
    return (
        <div className={styles.mainImg}>
            <a>
                <img src="images/bigimg.png"></img>
            </a>
        </div>
    );
};

export default ImgSlicer;
