// import CartActionTypes from './cart.types';

export const toggleCartHiddenActionFunction = () => ({
    // type: CartActionTypes.TOGGLE_CART_HIDDEN
    type: 'TOGGLE_CART_HIDDEN'
});

export const addToCartItemsActionFunction = item => ({
    type: 'ADD_TO_CARTITEMS_ARRAY',
    payload: item
});