export const actionTypes = {
    GET_ALL_AGENTS: 'GET_ALL_AGENTS',
    GET_ALL_AGENTS_SUCCESS: 'GET_ALL_AGENTS_SUCCESS',
    CREATE_AGENT: 'CREATE_AGENT',
    UPDATE_AGENT: 'UPDATE_AGENT',
    CHECK_USER_UPDATE: 'CHECK_USER_UPDATE',
    CHECK_USER_UPDATE_SUCCESS: 'CHECK_USER_UPDATE_SUCCESS',
	LOADING:"LOADING",
};

export function getAgent(payload) {
    return { type: actionTypes.GET_ALL_AGENTS, payload };
}

export function getAgentSuccess(payload) {
    return { type: actionTypes.GET_ALL_AGENTS_SUCCESS, payload };
}

export function checkUserUpdate(payload) {
    return { type: actionTypes.CHECK_USER_UPDATE, payload };
}

export function checkUserUpdateSuccess(payload) {
    return { type: actionTypes.CHECK_USER_UPDATE_SUCCESS, payload };
}

export function setLoader(payload) {
    return { type: actionTypes.LOADING, payload };
}

export function createAgent(payload) {
    return { type: actionTypes.CREATE_AGENT, payload };
}

export function updateAgent(payload) {
    return { type: actionTypes.UPDATE_AGENT, payload };
}