export const addingbutbasedonQuantity = (cartItemsArrayofObjects, cartItemToAdd) =>
{
    const existingCartItem = cartItemsArrayofObjects.find(
        cartItem => cartItem.id === cartItemToAdd.id
    );

    if (existingCartItem) {

        // .map function returns an array
        return cartItemsArrayofObjects.map(cartItem =>
            cartItem.id === cartItemToAdd.id ? { ...cartItem, quantity: cartItem.quantity + 1 }  : cartItem
        );
    }

    return [...cartItemsArrayofObjects, { ...cartItemToAdd, quantity: 1 }];
};

