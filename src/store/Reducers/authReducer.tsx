import * as actions from '../Actions/authAction';

export const intialState = {
  isDevelopment: true,
  isAuthenticated: false,
  versionNumber: '',
  user: {},
  first_name: '',

};

export default function authReducer(state = intialState, action) {
  switch (action.type) {
    case actions.SET_CURRENT_USER:
      return {
        ...state,
        user: action.user,
        first_name: action.user?.first_name,
        last_name: action.user?.last_name,
      };
    default:
      return state;
  }
}
