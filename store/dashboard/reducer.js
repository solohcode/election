import { actionTypes } from './action';

export const initState = {
	loading:false,
	analytics:[],
  transactions: []
};

function reducer(state = initState, action) {
  switch (action.type) {
    case actionTypes.GET_DASHBOARD_ANALYTICS_SUCCESS:
      return {
        ...state,
        ...{ analytics: action.payload },
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
