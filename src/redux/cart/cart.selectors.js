import { createSelector } from "reselect";

// selector which returns a piece of state
const selectCart = state => state.cart;

//first parameter=array of input selectors, second para==function which takes output of array inputs selectors &
//return output which we want out of our defined selector

export const selectCartItemsArray = createSelector([selectCart], cart => cart.cartItemsArray);


// add the total quantity in an cartItemsArray
export const selectCartItemsQuantityCount = createSelector(
  [selectCartItemsArray],
  cartItemsArray =>
           cartItemsArray.reduce( (accumalatedQuantity, cartItem) => accumalatedQuantity + cartItem.quantity,0 )
       );

// retruns the [hidden] state value
export const selectCartHiddenSelector = createSelector(
  [selectCart],
  cart => cart.hidden
);



export const selectCartTotal = createSelector(
  [selectCartItemsArray],
  cartItemsArray =>
  cartItemsArray.reduce(
    (accumalatedQuantity, cartItem) =>
      accumalatedQuantity + cartItem.quantity * cartItem.price,
    0
  )
);
