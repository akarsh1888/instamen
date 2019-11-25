import { createSelector } from "reselect";

// selectors which returns a piece of state
const selectCart = state => state.cart;

//first parameter=array of input selectors, second para==function which return output which we want out of these
export const selectCartItemsArray = createSelector([selectCart], cart => cart.cartItemsArray);


export const selectCartItemsQuantityCount = createSelector([selectCartItemsArray], cartItemsArray =>
           cartItemsArray.reduce( (accumalatedQuantity, cartItem) => accumalatedQuantity + cartItem.quantity,0 )
       );




export const selectCartHidden = createSelector(
  [selectCart],
  cart => cart.hidden
);



export const selectCartTotal = createSelector([selectCartItemsArray], cartItemsArray =>
  cartItemsArray.reduce(
    (accumalatedQuantity, cartItem) =>
      accumalatedQuantity + cartItem.quantity * cartItem.price,
    0
  )
);
