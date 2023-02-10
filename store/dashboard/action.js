export const actionTypes = {
    GET_DASHBOARD_ANALYTICS: 'GET_DASHBOARD_ANALYTICS',
    GET_DASHBOARD_ANALYTICS_SUCCESS: 'GET_DASHBOARD_ANALYTICS_SUCCESS',
	LOADING:"LOADING",
};

export function getDashboardAnalytics(payload) {
    return { type: actionTypes.GET_DASHBOARD_ANALYTICS, payload };
}

export function getDashboardAnalyticsSuccess(payload) {
    return { type: actionTypes.GET_DASHBOARD_ANALYTICS_SUCCESS, payload };
}

export function setLoader(payload) {
    return { type: actionTypes.LOADING, payload };
}