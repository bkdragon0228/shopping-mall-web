import { UPLOAD_PRODUCT, GET_PRODUCT } from '../_action/types';

const initalState = {};

export default function product(state = initalState, action) {
    switch (action.type) {
        case UPLOAD_PRODUCT:
            return { ...state, uploadSuccess: action.payload };

        case GET_PRODUCT:
            return { ...state, productInfo: action.payload };

        default:
            return state;
    }
}
