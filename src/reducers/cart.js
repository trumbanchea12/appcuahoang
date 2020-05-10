
import * as types from './../constants/ActionType';

var initialState = [];

const cart = (state = initialState, action) => {
   switch (action.type) {
      case types.ADD_TO_CART:
         console.log('ADD_TO_CART_SUCCESS state', state);
         var gioHang = {
            "id": action.product.id,
            "name": action.product.sanpham_ten,
            "qty": 1,
            "price": action.product.gia_tien,
            "weight": 30000,
            "options": {
               "image": action.product.sanpham_anh,
               "donvitinh": "kg",
               "shop_id": action.product.shop_id,
               "lohang_id": action.product.lohang_id
            },
            "discount": 0,
            "tax": 5040,
            "subtotal": action.product.gia_tien

         }
         const huyhoang = [...state, action.product];
         var exists = false;
         const newState = state.map(item => {
            if (item.id === gioHang.id) {
               exists = true;
               return {
                  ...item,
                  // quantity: item.quantity + 1
                  qty: item.qty + 1,
                  subtotal: item.subtotal * item.qty
               }
            } else {
               return item
            }
         });
         if (exists) {
            return newState;
         } else {
            return [...state, gioHang];
         }
         console.log("Cart action" + JSON.stringify(huyhoang))
      case types.REMOVE_FROM_CART:
         const remaingList = [
            ...state.filter(i => i.id !== action.item.id)
         ];
         return remaingList;
      case types.UP_QUANTITY_CART:
         const upQuantity = state.map(item => {
            if (item.id === action.item.id) {
               return {
                  ...item,
                  // quantity: item.quantity + 1
                  qty: item.qty + 1,
               }
            }
         });
         return upQuantity;
      case types.DOWN_QUANTITY_CART:
         const downQuantity = state.map(item => {
            if (item.id === action.item.id) {
               if(item.qty <= 1)
               {
                  return {
                     ...item,
                     // quantity: item.quantity + 1
                     qty: 1,
                  }
               }
               return {
                  ...item,
                  // quantity: item.quantity + 1
                  qty: item.qty - 1,
               }
            }
         });
         return downQuantity;

      default: return [...state];
   }
}

export default cart;