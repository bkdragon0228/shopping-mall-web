import axios from 'axios';
import { UPLOAD_PRODUCT, GET_PRODUCT } from './types';

export function uploadProduct(dataToSubmit) {
    const response = axios.post('/api/products/upload', dataToSubmit).then((res) => res.data); //promise

    return {
        type: UPLOAD_PRODUCT,
        payload: response,
    };
}

export function getProduct(dataToSubmit) {
    const responce = axios.post('/api/products/products', dataToSubmit).then((res) => res.data);

    return {
        type: GET_PRODUCT,
        payload: responce,
    };
}
