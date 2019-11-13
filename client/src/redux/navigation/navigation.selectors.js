import { createSelector } from 'reselect';

const selectNavigation = state => state.navigation;

export const selectNavLinks = createSelector(
  [selectNavigation],
  navigation => navigation.navLinks
)


export const selectToggleSidedrawer = createSelector(
  [selectNavigation],
  navigation => navigation.toggleSidedrawer
);

export const selectWindowInnerWidth = createSelector(
  [selectNavigation],
  navigation => navigation.windowWidth
);