//import ShopActionTypes from './shop.types';

export const shopDataFromFirebaseToReducerAction = (singleObjectCollection) => ({
    type: 'ADD_SHOPDATA_FROM_FIREBASE_TO_REDUCER',
    payload: singleObjectCollection
});