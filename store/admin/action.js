export const actionTypes = {
    GET_ADMIN: 'GET_ADMIN',
    GET_ADMIN_SUCCESS: 'GET_ADMIN_SUCCESS',
    GET_COOPERATIVES: 'GET_COOPERATIVES',
    GET_COOPERATIVES_SUCCESS: 'GET_COOPERATIVES_SUCCESS',
	GET_ADMIN_DETAILS: 'GET_ADMIN_DETAILS',
    GET_ADMIN_DETAILS_SUCCESS: 'GET_ADMIN_DETAILS_SUCCESS',
    ENABLE_OR_DISABLE_USER: 'ENABLE_OR_DISABLE_USER',
    UPDATE_ADMIN: 'UPDATE_ADMIN',
    UPGRADE_USER: 'UPGRADE_USER',
    UPDATE_USER_GROUP: 'UPDATE_USER_GROUP',
    CREATE_USER: 'CREATE_USER',
	LOADING:"LOADING",
	GET_PAGINATION: 'GET_PAGINATION',
	GET_ADMIN_PAGINATION: 'GET_ADMIN_PAGINATION',
};

export function getPaginations(payload) {
    return { type: actionTypes.GET_PAGINATION, payload };
}

export function getAdminPagination(payload) {
    return { type: actionTypes.GET_ADMIN_PAGINATION, payload };
}

export function getAdmin(payload) {
    return { type: actionTypes.GET_ADMIN, payload };
}

export function getAdminSuccess(payload) {
    return { type: actionTypes.GET_ADMIN_SUCCESS, payload };
}

export function getCooperative(payload) {
    return { type: actionTypes.GET_COOPERATIVES, payload };
}

export function getCooperativeSuccess(payload) {
    return { type: actionTypes.GET_COOPERATIVES_SUCCESS, payload };
}

export function getAdminDetails(payload) {
    return { type: actionTypes.GET_ADMIN_DETAILS, payload };
}

export function getAdminDetailsSuccess(payload) {
    return { type: actionTypes.GET_ADMIN_DETAILS_SUCCESS, payload };
}

export function disableOrEnableUser(payload) {
    return { type: actionTypes.ENABLE_OR_DISABLE_USER, payload };
}

export function updateAdmin(payload) {
    return { type: actionTypes.UPDATE_ADMIN, payload };
}

export function upgradeUser(payload) {
    return { type: actionTypes.UPGRADE_USER, payload };
}

export function updateUserGroup(payload) {
    return { type: actionTypes.UPDATE_USER_GROUP, payload };
}

export function createUser(payload) {
    return { type: actionTypes.CREATE_USER, payload };
}

export function setLoader(payload) {
    return { type: actionTypes.LOADING, payload };
}