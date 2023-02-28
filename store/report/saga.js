import { all, call, put, takeEvery } from 'redux-saga/effects';
import { actionTypes } from './action';
import AdminRepository from '../../repositories/AdminRepository';
import { modalSuccess, modalWarning, timeOut } from '../utilities';

function* ALL_REPORT() {
	try {
		yield put({
			type: 'report/SET_STATE',
			payload: {
				loading: true,
			},
		})
		const success = yield call(AdminRepository.getRequests, 'report')
		if (success && success.status) {
			yield put({
				type: 'report/SET_STATE',
				payload: {
					reports: success.data,
					total: success.total,
					loading: false,
				},
			})
		}
		if (!success?.status) {
			yield put({
				type: 'report/SET_STATE',
				payload: {
					loading: false,
				},
			})
		}
	} catch (err) {
		console.log(err);
	}
}

function* ALL_RESULT({payload}) {
	try {
		yield put({
			type: 'report/SET_STATE',
			payload: {
				loading: true,
			},
		})
		const { type, page } = payload;
		const success = yield call(AdminRepository.getRequests, `result?type=${type}&page=${page}`)
		if (success && success.status) {
			yield put({
				type: 'report/SET_STATE',
				payload: {
					results: success.data,
					total: success?.total,
					loading: false,
				},
			})
		}
		if (!success?.status) {
			yield put({
				type: 'report/SET_STATE',
				payload: {
					loading: false,
				},
			})
		}
	} catch (err) {
		console.log(err);
	}
}

function* CREATE_REPORT({payload}) {
	try {
		yield put({
			type: 'report/SET_STATE',
			payload: {
				loading: true,
			},
		})
		const result = yield call(AdminRepository.postRequests, payload.data, 'report');
		if(result.status){
			modalSuccess("Success", result.message)
			yield payload.dispatch({
				type: 'report/ALL_REPORT',
				payload: {page: 1}
			})
		}
		if(!result.status){
			modalWarning("Success", result.message || result)
		}
		if(result === "Token has expired") {
			timeOut()
		}
		yield put({
			type: 'report/SET_STATE',
			payload: {
				loading: false,
			},
		})
	} catch (err) {
		console.log(err);
	}
}

export default function* rootSaga() {
    yield all([takeEvery(actionTypes.ALL_REPORT, ALL_REPORT)]);
    yield all([takeEvery(actionTypes.ALL_RESULT, ALL_RESULT)]);
    yield all([takeEvery(actionTypes.CREATE_REPORT, CREATE_REPORT)]);
}
