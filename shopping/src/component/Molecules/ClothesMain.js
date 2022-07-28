import React from 'react';
import Image from '../Atoms/Image';
import styled from 'styled-components';

import { Row, Col } from 'antd';

const GridContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    row-gap: 10px;
    column-gap: 10px;
`;
const GridItem = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

// const ImageComponent = styled(Image)`

// `
const ClothesMain = ({ list }) => {
    // console.log(list[0].images[0]);

    const renderImage = (images) => {
        if (images.length > 0) {
            let image = images[0];
            return `http://localhost:5000/${image}`;
        }
    };
    const rendingProduct = () =>
        list &&
        list.map((product, index) => (
            <GridItem key={index}>
                <Image src={renderImage(product.images)} width={'200px'} height={`250px`} />
                <br />
                <br />
                {product.title}
                <br />
                <br />
                {`KRW ${product.price} `}
            </GridItem>
        ));
    return (
        // <Row gutter={[16, 16]} style={{ flexDirection: 'row' }}>
        //     {rendingProduct()}
        // </Row>
        <GridContainer>{rendingProduct()}</GridContainer>
    );
};

export default ClothesMain;
