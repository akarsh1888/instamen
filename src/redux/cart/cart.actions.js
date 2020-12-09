import CartActionTypes from "./cart.types";

export const toggleCartHiddenActionFunction = () => ({
  // type: CartActionTypes.TOGGLE_CART_HIDDEN
  type: CartActionTypes.TOGGLE_CART_HIDDEN,
});

export const addToCartItemsActionFunction = (item) => ({
  type: CartActionTypes.ADD_TO_CART,
  payload: item,
});

export const removeItemFromCartItemsArrayActionFunction = (item) => ({
  type: CartActionTypes.REMOVE_ITEM_FROM_CARTITEMS_ARRAY,
  payload: item,
});

export const deleteItemQuantityCartItemsArrayActionFunction = (item) => ({
  type: CartActionTypes.DELETE_QUANTITY_CARTITEMS_ARRAY,
  payload: item,
});
