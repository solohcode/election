export const actionTypes = {
    GET_ALL_STATES: 'GET_ALL_STATES',
    GET_ALL_STATES_SUCCESS: 'GET_ALL_STATES_SUCCESS',
	LOADING:"LOADING",
};

export function getAllStates(payload) {
    return { type: actionTypes.GET_ALL_STATES, payload };
}

export function getAllStatesSuccess(payload) {
    return { type: actionTypes.GET_ALL_STATES_SUCCESS, payload };
}

export function setLoader(payload) {
    return { type: actionTypes.LOADING, payload };
}