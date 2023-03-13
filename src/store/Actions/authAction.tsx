
import {store} from '../Store';

export const SET_CURRENT_USER = 'SET_CURRENT_USER';
export const SET_ERROR = 'SET_ERROR';
export const SET_LOADING = 'SET_LOADING';
export const SET_COLLECTION_POINT = 'SET_COLLECTION_POINT';
export const SET_DELIVERY_ADDRESS = 'SET_DELIVERY_ADDRESS';
export const SET_CLEAR_DATA = 'SET_CLEAR_DATA';
export const SET_ORDERS = 'SET_ORDERS';
export const SET_UPDATED_DATA = 'SET_UPDATED_DATA';





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




