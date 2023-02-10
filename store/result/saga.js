import { all, call, put, takeEvery } from 'redux-saga/effects';
import { actionTypes, getAggregateResultsSuccess, getChartData, getResults, getResultsSuccess, setLoader } from './action';
import { modalSuccess, modalWarning, timeOut } from '../utilities';
import AdminRepository from '../../repositories/AuthRepository';

function* getResult({payload}) {
	try {
		yield put(setLoader(true));
		const result = yield call(AdminRepository.getRequests, payload);
		if(result.status){
			yield put(getResultsSuccess(result.data))
		}
		if(result === "Token has expired") {
			timeOut()
		}
		yield put(setLoader(false));
	} catch (err) {
		console.log(err);
	}
}

function* getChart({payload}) {
	try {
		yield put(setLoader(true));
		const result = yield call(AdminRepository.getRequests, payload);
		if(result.status){
			yield put(getChartData(result.data))
		}
		if(result === "Token has expired") {
			timeOut()
		}
		yield put(setLoader(false));
	} catch (err) {
		console.log(err);
	}
}

function* getAggregateResult({payload}) {
	try {
		yield put(getAggregateResultsSuccess([]))
		yield put(setLoader(true));
		const result = yield call(AdminRepository.getRequests, payload);
		if(result.status){
			yield put(getAggregateResultsSuccess(result.data))
		}
		if(result === "Token has expired") {
			timeOut()
		}
		yield put(setLoader(false));
	} catch (err) {
		console.log(err);
	}
}

function* createResult({payload}) {
	try {
		yield put(setLoader(true));
		const result = yield call(AdminRepository.postRequests, payload.data, 'election-result');
		if(result.status){
			modalSuccess("Success", result.message)
			yield payload.dispatch(getResults(`election-result`))
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
	yield all([takeEvery(actionTypes.GET_RESULTS, getResult)]);
	yield all([takeEvery(actionTypes.GET_AGGREGATE_RESULTS, getAggregateResult)]);
	yield all([takeEvery(actionTypes.CREATE_RESULT, createResult)]);
	yield all([takeEvery(actionTypes.GET_CHART_DATA, getChart)]);
}
