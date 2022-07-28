import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import ClothesMain from '../Molecules/ClothesMain';
import MainMenu from '../Molecules/MainMenu';

import axios from 'axios';
import { useDispatch } from 'react-redux';
import { getProduct } from '../../_action/product_action';

const BodyComponent = styled.div`
    padding: 0;
    width: 1000px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content
`;
const MainBody = () => {
    const dispatch = useDispatch();
    const [products, setProducts] = useState([]);
    useEffect(() => {
        dispatch(getProduct()).then((res) => {
            if (res.payload.success) {
                setProducts(res.payload.productsInfo);
            } else {
                alert('상품 정보를 가져오지 못했습니다.');
            }
        });

        // console.log(products);
    }, []);

    // 상품 렌딩할곳
    return (
        <BodyComponent>
            <MainMenu />
            <ClothesMain list={products} />
        </BodyComponent>
    );
};

export default MainBody;
