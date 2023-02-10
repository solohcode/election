import { actionTypes } from './action';

export const initState = {
	loading: false,
	parties: [],
};

function reducer(state = initState, action) {
  switch (action.type) {
    case actionTypes.GET_ALL_PARTIES_SUCCESS:
      return {
        ...state,
        ...{ parties: action.payload },
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
