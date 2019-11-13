import {createSelector} from 'reselect'

const selectComments = state => state.comments;

export const selectUserComments = createSelector(
  [selectComments],
  comments => comments.userComments
);

export const selectUserCommentsLength = createSelector(
  [selectUserComments],
  userComments => userComments ? Object.keys(userComments).length : null
)

export const selectUserCommentsMap = createSelector(
  [selectUserComments],
  userComments => userComments ? Object.keys(userComments).map(key => userComments[key]) : null
);

export const selectCommentsIsLoaded = createSelector(
  [selectComments],
  comments => !!comments.userComments
);

export const selectShowComments = createSelector(
  [selectComments],
  comments => comments.showComments
);

export const selectCommentsLoading = createSelector(
  [selectComments],
  comments => comments.loading
);