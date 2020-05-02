import * as types from '../constants/ActionType';

export const actAddToCart = (product) => {
    return {
        type: types.ADD_TO_CART,
        product
    }
}