export const actionTypes = {
    GET_POLLING_UNIT: 'GET_POLLING_UNIT',
    GET_POLLING_UNIT_SUCCESS: 'GET_POLLING_UNIT_SUCCESS',
    CREATE_POLLING_UNIT: 'CREATE_POLLING_UNIT',
    EDIT_POLLING_UNIT: 'EDIT_POLLING_UNIT',
	LOADING:"LOADING",
};

export function getPolingUnit(payload) {
    return { type: actionTypes.GET_POLLING_UNIT, payload };
}

export function getPolingUnitSuccess(payload) {
    return { type: actionTypes.GET_POLLING_UNIT_SUCCESS, payload };
}

export function setLoader(payload) {
    return { type: actionTypes.LOADING, payload };
}

export function createPollingUnit(payload) {
    return { type: actionTypes.CREATE_POLLING_UNIT, payload };
}