export const actionTypes = {
    TOGGLE_DRAWER_MENU: 'TOGGLE_DRAWER_MENU',
    TOGGLE_DRAWER_MENU_SUCCESS: 'TOGGLE_DRAWER_MENU_SUCCESS',
    SELECT_STATE: 'SELECT_STATE',
    SELECT_ELECTION_TYPE: 'SELECT_ELECTION_TYPE',
};

export function toggleDrawerMenu(payload) {
    return { type: actionTypes.TOGGLE_DRAWER_MENU, payload };
}

export function toggleDrawerMenuSuccess(payload) {
    return { type: actionTypes.TOGGLE_DRAWER_MENU_SUCCESS, payload };
}

export function selectStateChange(payload) {
    return { type: actionTypes.SELECT_STATE, payload };
}

export function selectElectionType(payload) {
    return { type: actionTypes.SELECT_ELECTION_TYPE, payload };
}
