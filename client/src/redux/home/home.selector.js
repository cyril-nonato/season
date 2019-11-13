import { createSelector } from 'reselect';

const selectHome = state => state.home;

const sectionsToMap = sections => {
  return Object.keys(sections).map(key => sections[key]);
}

export const selectSections = createSelector(
  [selectHome],
  home => sectionsToMap(home.sections)
);