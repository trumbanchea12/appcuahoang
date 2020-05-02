
import * as types from './../constants/ActionType';

var initialState = [];

const cart = (state = initialState, action) => {
   switch (action.type) {
      case types.ADD_TO_CART:
         console.log('ADD_TO_CART_SUCCESS state', state)
         const huyhoang = [...state, action.product];
         var exists = false;
         const newState = state.map(item => {
            if (item.product.id === action.product.product.id) {
               exists = true;
               return {
                  ...item,
                  quantity: item.quantity + 1
               }
            } else {
               return item
            }
         });
         if (exists) {
            return newState;
         } else {
            return [...state, action.product];
         }
         console.log("Cart action" + JSON.stringify(huyhoang))
      case types.REMOVE_FROM_CART:
         const remaingList = [
            ...state.filter(i => i.product.id !== action.item.product.id)
         ];
         return remaingList;

      default: return [...state];
   }
}

export default cart;