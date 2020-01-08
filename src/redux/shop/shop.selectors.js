import { createSelector } from "reselect";


const shop = state => state.shop;

export const selectShopCollectionsSelector = createSelector(
    [shop],
    shop => shop.collections
    );
    
// Earlier when we have to access selectedcollection

    // const COLLECTION_ID_MAP = {
    //     hats: 1,
    //     sneakers: 2,
    //     jackets: 3,
    //     womens: 4,
    //     mens: 5
    // };



export const selectParticularCollectionSelector = collectionUrlParam =>
    createSelector(
        [selectShopCollectionsSelector],
        collections =>
            // collections.find( collection => collection.id === COLLECTION_ID_MAP[collectionUrlParam] ) 
            collections[collectionUrlParam]
    );





//-----OPTIONAL FOR LEARNING
// converting our collection objectsofobjects into array of values only
export const selectCollectionsAsArrayOfValuesSelector = createSelector(
    [selectShopCollectionsSelector],
    collections => Object.keys(collections).map(key => collections[key])
);
