export const actionTypes = {
    GET_ALL_PARTIES: 'GET_ALL_PARTIES',
    GET_ALL_PARTIES_SUCCESS: 'GET_ALL_PARTIES_SUCCESS',
	LOADING:"LOADING",
};

export function getAllParties(payload) {
    return { type: actionTypes.GET_ALL_PARTIES, payload };
}

export function getAllPartiesSuccess(payload) {
    return { type: actionTypes.GET_ALL_PARTIES_SUCCESS, payload };
}

export function setLoader(payload) {
    return { type: actionTypes.LOADING, payload };
}