import { actionTypes } from './action';

export const initState = {
	loading: false,
	states: [],
};

function reducer(state = initState, action) {
  switch (action.type) {
    case actionTypes.GET_ALL_STATES_SUCCESS:
      return {
        ...state,
        ...{ states: action.payload },
      };
    case actionTypes.LOADING:
      return {
        ...state,
        ...{ loading: action.payload },
      };
		default:
      return state;
  }
}

export default reducer;
