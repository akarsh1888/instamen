//import ShopActionTypes from './shop.types';

import { firestore, fetchConvertFirebaseShopDataIntoSingleObjectPattern } from '../../firebase/firebase.utils';


export const fetchShopDataFromFirebaseStart = () => ({
    type: 'FETCH_SHOPDATA_FROM_FIREBASE_START'
});

export const fetchShopDataFromFirebaseSuccess = singleObjectCollection => ({
    type: 'FETCH_SHOPDATA_FROM_FIREBASE_SUCCESS',
    payload: singleObjectCollection
});

export const fetchShopDataFromFirebaseFailure = errorMessage => ({
    type: 'FETCH_SHOPDATA_FROM_FIREBASE_FAILED',
    payload: errorMessage
});





// all fetching of data from firebase & updating the reducer accordingly is done here 

export const fetchShopDataFromFirebaseAsyncAction = () => {

    return (dispatch) => {

    // get collectionreference object
    const collectionRefObject = firestore.collection('collection');

    // dispatch(fetchShopDataFromFirebaseStart());
 
    
    // below functn will receive [collctnSnapshot object] ..with [docs] array of docmnt snapshot objects
    //of all docmnts inside a collection

    //---***------ WITHOU onSnapshot realtime listener feature
    collectionRefObject
        .get()
        .then(collectionSnapshotObj => {
            const singleObjectCollection = fetchConvertFirebaseShopDataIntoSingleObjectPattern(collectionSnapshotObj);
            
                
            dispatch(fetchShopDataFromFirebaseSuccess(singleObjectCollection));
            })
        .catch(error => dispatch(fetchShopDataFromFirebaseFailure(error.message)));
    };


/*---***------ WITH onSnapshot realtime listener feature
this.unsubscribeFromSnapshot = collectionRefObject.onSnapshot(async collectionSnapshotObj => {

const singleObjectCollection = await fetchConvertFirebaseShopDataIntoSingleObjectPattern(collectionSnapshotObj);
*/
    
};