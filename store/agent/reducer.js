import { actionTypes } from './action';

export const initState = {
	loading: false,
  isUserUpdated: true,
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
    case actionTypes.CHECK_USER_UPDATE_SUCCESS:
      return {
        ...state,
        ...{ isUserUpdated: action.payload},
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
