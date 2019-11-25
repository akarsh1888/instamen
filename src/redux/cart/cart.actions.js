import CartActionTypes from './cart.types';

export const toggleCartHidden = () => ({
    type: CartActionTypes.TOGGLE_CART_HIDDEN
});

export const addToCartItemsAction = item => ({
    type: 'ADD_TO_CARTITEMS',
    payload: item
});