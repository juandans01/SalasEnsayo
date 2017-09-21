import {Map} from 'immutable';

// Initial state
const initialState = Map({
  data: null,
  loaded: false
});
// Actions
const SET_DATABASE = 'FirebaseState/SET_DATABASE';

// Action creators
export function setDatabase(data) {
  return {
    type: SET_DATABASE,
    payload: data
  };
}

// Reducer
export default function FirebaseStateReducer(state = initialState, action = {}) {
  switch (action.type) {
    case SET_DATABASE:
      return state
        .set('data', action.payload)
        .set('loaded', true);

    default:
      return state;
  }
}
