import { all, call, put, takeEvery } from 'redux-saga/effects';
import { actionTypes, getPolingUnit, getPolingUnitSuccess, setLoader } from './action';
import { modalSuccess, modalWarning, timeOut } from '../utilities';
import AdminRepository from '../../repositories/AdminRepository';

function* getPolingUnits({payload}) {
	try {
		yield put(setLoader(true));
		const result = yield call(AdminRepository.getRequests, payload);
		if(result.status){
			yield put(getPolingUnitSuccess({data: result.data, total: result.total}))
		}
		if(result === "Token has expired") {
			timeOut()
		}
		yield put(setLoader(false));
	} catch (err) {
		console.log(err);
	}
}

function* createPollingUnit({payload}) {
	try {
		yield put(setLoader(true));
		const result = yield call(AdminRepository.postRequests, payload.data, 'polling-unit');
		if(result.status){
			modalSuccess("Success", result.message)
			yield payload.dispatch(getPolingUnit(`polling-unit`))
		}
		if(!result.status){
			modalWarning("Success", result.message || result)
		}
		if(result === "Token has expired") {
			timeOut()
		}
		yield put(setLoader(false));
	} catch (err) {
		console.log(err);
	}
}

function* editPollingUnit({payload}) {
	try {
		yield put(setLoader(true));
		const result = yield call(AdminRepository.putRequests, payload.data, 'polling-unit');
		if(result.status){
			modalSuccess("Success", result.message)
			yield payload.dispatch(getPolingUnit(`polling-unit`))
		}
		if(!result.status){
			modalWarning("Success", result.message || result)
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
	yield all([takeEvery(actionTypes.GET_POLLING_UNIT, getPolingUnits)]);
	yield all([takeEvery(actionTypes.CREATE_POLLING_UNIT, createPollingUnit)]);
	yield all([takeEvery(actionTypes.EDIT_POLLING_UNIT, editPollingUnit)]);
}
