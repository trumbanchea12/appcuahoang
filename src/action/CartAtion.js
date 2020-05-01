import * as types from '../constants/ActionType';

export const actAddToCart = (payload) => {
    return {
        type: types.ADD_TO_CART,
        payload
    }
}