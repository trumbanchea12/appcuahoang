import { combineReducers } from 'redux';
import topproducts from './topproducts';
import cart from './cart';
import signup from './signup';

const appReducers = combineReducers({
    topproducts,
    cart,
    signup,
});

export default appReducers;