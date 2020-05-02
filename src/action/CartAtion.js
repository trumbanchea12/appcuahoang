import * as types from '../constants/ActionType';

export const actAddToCart = (product) => {
    return {
        type: types.ADD_TO_CART,
        product
    }
}

export const actRemoveFromCart = (item) => {
    return {
        type: types.REMOVE_FROM_CART,
        item
    }
}