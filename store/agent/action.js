export const actionTypes = {
    GET_ALL_AGENTS: 'GET_ALL_AGENTS',
    GET_ALL_AGENTS_SUCCESS: 'GET_ALL_AGENTS_SUCCESS',
    CREATE_AGENT: 'CREATE_AGENT',
	LOADING:"LOADING",
};

export function getAgent(payload) {
    return { type: actionTypes.GET_ALL_AGENTS, payload };
}

export function getAgentSuccess(payload) {
    return { type: actionTypes.GET_ALL_AGENTS_SUCCESS, payload };
}

export function setLoader(payload) {
    return { type: actionTypes.LOADING, payload };
}

export function createAgent(payload) {
    return { type: actionTypes.CREATE_AGENT, payload };
}