import { createSelector } from 'reselect';

const selectUser = state => state.user;

//first parameter=array of input selectors, second para==function which takes output of array inputs selectors &
//return output which we want out of our defined selector

export const selectCurrentUserSelector = createSelector(
    [selectUser],
    user => user.currentUser
);