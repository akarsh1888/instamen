export const addingbutbasedonQuantity = (cartItemsArrayofObjects, cartItemToAdd) =>
{

    // if it finds any object similar with that id exist or not ,it returns true/false
const existingCartItem = cartItemsArrayofObjects.find( cartItem => cartItem.id === cartItemToAdd.id );

    if (existingCartItem) {
    
        // .map function returns a new array
        return cartItemsArrayofObjects.map(cartItem =>
            cartItem.id === cartItemToAdd.id ? { ...cartItem, quantity: cartItem.quantity + 1 }  : cartItem
        );
    }

    //otherwise

    return [...cartItemsArrayofObjects, { ...cartItemToAdd, quantity: 1 }];
};

