import { createSelector } from "reselect";


const shop = state => state.shop;

export const selectShopCollectionsSelector = createSelector(
    [shop],
    shop => shop.collections
);