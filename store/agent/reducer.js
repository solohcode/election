import { actionTypes } from './action';

export const initState = {
	loading: false,
	agents: [],
  total: 0,
};

function reducer(state = initState, action) {
  switch (action.type) {
    case actionTypes.GET_ALL_AGENTS_SUCCESS:
      return {
        ...state,
        ...{ agents: action.payload.data, total: action.payload.total},
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
