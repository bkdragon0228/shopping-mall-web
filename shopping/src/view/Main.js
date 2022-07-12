import React from 'react';
import ImgSlicer from '../component/ImgSlicer';

const Main = () => {
    return (
        <div>
            <ImgSlicer />
            <div>
                <ul style={{ display: 'flex', justifyContent: 'center' }}>
                    <li
                        style={{
                            textTransform: 'uppercase',
                            fontSize: '14px',
                            fontWeight: '800px',
                        }}
                    >
                        <a
                            href="##"
                            style={{
                                textDecoration: 'none',
                                marginRight: '1rem',
                            }}
                        >
                            new
                        </a>
                        <a
                            href="##"
                            style={{
                                textDecoration: 'none',
                                marginRight: '1rem',
                            }}
                        >
                            best
                        </a>
                        <a
                            href="##"
                            style={{
                                textDecoration: 'none',
                                marginRight: '1rem',
                            }}
                        >
                            cody
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Main;
