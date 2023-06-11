const authReducer = (state, action) => {
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
