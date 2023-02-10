import { actionTypes } from './action';

export const initState = {
	loading: false,
	pollingUnits: [],
  total: 0,
};

function reducer(state = initState, action) {
  switch (action.type) {
    case actionTypes.GET_POLLING_UNIT_SUCCESS:
      return {
        ...state,
        ...{ pollingUnits: action.payload.data, total: action.payload.total},
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
