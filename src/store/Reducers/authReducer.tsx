import * as actions from '../Actions/authAction';

export const intialState = {
data:[]

};

export default function authReducer(state = intialState, action) {
  switch (action.type) {
    case actions.SET_CURRENT_USER:
      return {
        ...state,
        data: action.data,
      };
    default:
      return state;
  }
}
