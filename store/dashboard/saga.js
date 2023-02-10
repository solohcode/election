import { all, call, put, takeEvery } from 'redux-saga/effects';
// import { notification } from 'antd';
// import Router from 'next/router';
import { actionTypes, getDashboardAnalyticsSuccess, setLoader } from './action';
import { modalSuccess, modalWarning, timeOut } from '../utilities';
import AdminRepository from '../../repositories/AuthRepository';

function* getDashboardAnalytic({payload}) {
    try {
        yield put(setLoader(true));
		const result = yield call(AdminRepository.getRequests, payload);
		if(result.status){
			yield put(getDashboardAnalyticsSuccess(result.data))
		}
		if(result === "Token has expired") {
			timeOut()
		}
		yield put(setLoader(false));
    } catch (err) {
        console.log(err);
    }
}

export default function* rootSaga() {
    yield all([takeEvery(actionTypes.GET_DASHBOARD_ANALYTICS, getDashboardAnalytic)]);
}
