// import INITIAL_STATE from './consts';

const authReducer = (state = null, action) => {
  switch (action.type) {
    case 'auth/login':
      return {
        ...state,
        isLoggedIn: true,
      };
    default:
      return state;
  }
};

export default authReducer;
