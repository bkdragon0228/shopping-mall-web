import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import ClothesMain from '../Molecules/ClothesMain';
import MainMenu from '../Molecules/MainMenu';

import { useDispatch } from 'react-redux';
import { getProduct } from '../../_action/product_action';

import { Input } from 'antd';
const { Search } = Input;

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
    const [skip, setSkip] = useState(10);
    const [limit, setLimit] = useState(16);

    const [searchValue, setSearchValue] = useState('');

    useEffect(() => {
        let body = {
            skip: skip,
            limit: limit,
        };
        dispatch(getProduct(body)).then((res) => {
            if (res.payload.success) {
                setProducts(res.payload.productsInfo);
            } else {
                alert('상품 정보를 가져오지 못했습니다.');
            }
        });

        // console.log(products);
    }, []);

    const handleInput = (e) => {
        setSearchValue(e.target.value);
    };
    return (
        <BodyComponent>
            <MainMenu />

            <form style={{ display: 'flex', justifyContent: 'flex-end', margin: '10px' }}>
                <Search placeholder="input search text" value={searchValue} onChange={handleInput} enterButton />
            </form>

            <ClothesMain list={products} />
        </BodyComponent>
    );
};

export default MainBody;
