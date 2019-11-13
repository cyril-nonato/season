import actionTypes from "./navigation.types"

export const getWindowWidth = (width) => ({
  type: actionTypes.GET_WINDOW_WIDTH,
  payload: width
});

export const toggleSidedrawer = () => ({
  type: actionTypes.TOGGLE_SIDEDRAWER
})