export const actionTypes = {
    LOGIN_REQUEST: 'LOGIN_REQUEST',
	LOADING:"LOADING",
    LOGIN_SUCCESS: 'LOGIN_SUCCESS',
    FORGOT_PASSWORD_REQUEST: 'FORGOT_PASSWORD_REQUEST',
    RESET_PASSWORD_REQUEST: 'RESET_PASSWORD_REQUEST',
    REGISTER_REQUEST: 'REGISTER_REQUEST',
    LOGOUT: 'LOGOUT',
    LOGOUT_SUCCESS: 'LOGOUT_SUCCESS',
    CHECK_AUTHORIZATION: 'CHECK_AUTHORIZATION',
    GET_COOPERATIVES_REQUEST: 'GET_COOPERATIVES_REQUEST',
    GET_COOPERATIVES_SUCCESS: 'GET_COOPERATIVES_SUCCESS',
    SET_SHOW: 'SET_SHOW',
    VALIDATE_LOGIN_REQUEST: 'VALIDATE_LOGIN_REQUEST',
};

export function setShow(payload) {
    return { type: actionTypes.SET_SHOW, payload };
}

export function login(payload) {
    return { type: actionTypes.LOGIN_REQUEST, payload };
}

export function forgotPassword(payload) {
    return { type: actionTypes.FORGOT_PASSWORD_REQUEST, payload };
}

export function resetPassword(payload) {
    return { type: actionTypes.RESET_PASSWORD_REQUEST, payload };
}

export function register(payload) {
    return { type: actionTypes.REGISTER_REQUEST, payload };
}

export function loginSuccess() {
    return { type: actionTypes.LOGIN_SUCCESS };
}

export function logOut() {
    return { type: actionTypes.LOGOUT };
}

export function logOutSuccess() {
    return { type: actionTypes.LOGOUT_SUCCESS };
}

export function setLoader(payload) {
    return { type: actionTypes.LOADING, payload };
}

