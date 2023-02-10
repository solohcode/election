import { actionTypes } from './action';

export const initState = {
	loading: false,
	electionResult: [],
  aggregateResult: [],
  chartData: [],
};

function reducer(state = initState, action) {
  switch (action.type) {
    case actionTypes.GET_RESULTS_SUCCESS:
      return {
        ...state,
        ...{ electionResult: action.payload },
      };
    case actionTypes.GET_CHART_DATA:
      return {
        ...state,
        ...{ chartData: action.payload },
      };
    case actionTypes.GET_AGGREGATE_RESULTS_SUCCESS:
      return {
        ...state,
        ...{ aggregateResult: action.payload },
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
