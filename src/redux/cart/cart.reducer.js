// import CartActionTypes from './cart.types';

import { addingbutbasedonQuantity} from '../cart/cart.utils';

const INITIAL_STATE = {
    hidden: true,
    cartItemsArray:[]
};

const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        
        case 'TOGGLE_CART_HIDDEN':
            return {
                ...state,
                hidden: !state.hidden
            };
        
        
        case 'ADD_TO_CARTITEMS_ARRAY':
            return {
                ...state,
                cartItemsArray: addingbutbasedonQuantity(state.cartItemsArray, action.payload)
            };
        
        
        default:
            return state;
    }
};


export default cartReducer;