import React from 'react';
import styled from 'styled-components';
import Image from '../Atoms/Image';
import Menu from '../Atoms/Menu';

import { Row, Col } from 'antd';

const ClothesMain = ({ list }) => {
    console.log(list);
    const rendingProduct = () =>
        list &&
        list.map((product) => (
            <Col lg={6} xs={24} key={product._id}>
                <image src={`http://localhost:5000/${product.images[0]}`}></image>
                <br />
                {product.title}
                <br />
                {`KRW ${product.price} `}
            </Col>
        ));
    return <Row>{rendingProduct()}</Row>;
};

export default ClothesMain;
