
import * as types from './../constants/ActionType';

var initialState = [
   {
      "product": {
         "id":"43",
        "name":"strappy cut-ou",
        "idType":"4",
        "nameType":"Maxi Dress",
        "price":"117",
        "color":"Green",
        "material":"fur",
        "description":"Weddings or red carpets, this dress is ready for anything. With plunging keyhole cut-outs and skin-baring strappy sides, less is more when it comes to this dramatic look. Add a fabulous heel, and you've got effortlessly glamorous style on lock.",
        "images":[
           "82.jpeg",
           "83.jpeg"
        ]
      },
      "quantity" : 5

   },
   {
      "product": {
         "id":"43",
        "name":"Dress long",
        "idType":"4",
        "nameType":"Maxi Dress",
        "price":"210",
        "color":"Green",
        "material":"fur",
        "description":"Weddings or red carpets, this dress is ready for anything. With plunging keyhole cut-outs and skin-baring strappy sides, less is more when it comes to this dramatic look. Add a fabulous heel, and you've got effortlessly glamorous style on lock.",
        "images":[
         "58.jpeg",
         "59.jpeg"
        ]
      },
      "quantity" : 2

   }
];

const cart = (state = initialState, action) => {
   switch (action.type) {
      case types.ADD_TO_CART:
         console.log('ADD_TO_CART_SUCCESS state', state)
         const huyhoang = [...state, action.product]
         console.log("Cart action" + JSON.stringify(huyhoang))
         return [...state, action.product];
      default: return [...state];
   }
}

export default cart;