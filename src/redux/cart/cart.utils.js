export const addingbutbasedonQuantityUtility = (cartItemsArrayofObjects, cartItemToAdd) =>
{
    // if it finds any object similar with that id exist or not ,it returns true/false
const existingCartItem = cartItemsArrayofObjects.find( cartItem => cartItem.id === cartItemToAdd.id );

    if (existingCartItem) {
    
        // .map function returns a new array
        return cartItemsArrayofObjects.map(cartItem =>
            cartItem.id === cartItemToAdd.id ?
                { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
        );
    }

    //otherwise

    return [...cartItemsArrayofObjects, { ...cartItemToAdd, quantity: 1 }];
};






export const deletebutbasedonQuantityUtility = (cartItemsArray, cartItemToDelete) => {
  
    const CartItemExist = cartItemsArray.find(cartItem => cartItem.id === cartItemToDelete.id);
    
    if (CartItemExist.quantity === 1) {
        return cartItemsArray.filter(cartItem => cartItem.id !== cartItemToDelete.id)
    }

    return cartItemsArray.map(cartItem =>
        cartItem.id === cartItemToDelete.id ? { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem 
        );
};