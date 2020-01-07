import { createSelector } from "reselect";

const selectDirectory = state => state.directory; 

export const selectDirectorySectionsSelector = createSelector(
    [selectDirectory],
    directory => directory.sections);