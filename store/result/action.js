export const actionTypes = {
    GET_RESULTS: 'GET_RESULTS',
    GET_RESULTS_SUCCESS: 'GET_RESULTS_SUCCESS',
    GET_CHART_DATA: 'GET_CHART_DATA',
    GET_AGGREGATE_RESULTS: 'GET_AGGREGATE_RESULTS',
    GET_AGGREGATE_RESULTS_SUCCESS: 'GET_AGGREGATE_RESULTS_SUCCESS',
    CREATE_RESULT: 'CREATE_RESULT',
	LOADING:"LOADING",
};

export function getResults(payload) {
    return { type: actionTypes.GET_RESULTS, payload };
}

export function getChartData(payload) {
    return { type: actionTypes.GET_CHART_DATA, payload };
}

export function getResultsSuccess(payload) {
    return { type: actionTypes.GET_RESULTS_SUCCESS, payload };
}

export function getAggregateResults(payload) {
    return { type: actionTypes.GET_AGGREGATE_RESULTS, payload };
}

export function getAggregateResultsSuccess(payload) {
    return { type: actionTypes.GET_AGGREGATE_RESULTS_SUCCESS, payload };
}

export function createResult(payload) {
    return { type: actionTypes.CREATE_RESULT, payload };
}

export function setLoader(payload) {
    return { type: actionTypes.LOADING, payload };
}