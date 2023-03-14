
import {store} from '../Store';

export const SET_CURRENT_USER = 'SET_CURRENT_USER';






export function selectedCard(item:any) {
  return async dispatch => {
    try {
      dispatch(setSelectedCard(item));
    } catch (err) {
      return err;
    }
  };
}
export function setSelectedCard(data) {
  return {
    type: SET_SELECTED_CARD,
    data,
  };
}




