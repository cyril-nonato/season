import actionTypes from "./navigation.types"

const INITIAL_STATE = {
  navLinks: [
    {
      name: 'Shop',
      route: '/shop',
      user: 'neutral'
    },
    {
      name: 'Cart',
      route: '/cart',
      user: 'neutral'
    },
    {
      name: 'Sign-in',
      route: '/sign-in',
      user: 'no-user'
    },
    {
      name: 'Sign-up',
      route: '/sign-up',
      user: 'no-user'
    },
    {
      name: 'Sign-out',
      route: '/sign-out',
      user: 'user'
    }
  ],
  windowWidth: window.innerWidth,
  toggleSidedrawer: false,
}

const navigationReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case actionTypes.GET_WINDOW_WIDTH:
      return {
        ...state,
        windowWidth: action.payload
      }
    case actionTypes.TOGGLE_SIDEDRAWER:
      return {
        ...state,
        toggleSidedrawer: !state.toggleSidedrawer
      }
    default:
      return state;
  }
}

export default navigationReducer;