import { all, call, put, takeEvery } from 'redux-saga/effects';
import { actionTypes } from './action';
import AdminRepository from '../../repositories/AdminRepository';

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
					loading: false,
				},
			})
		}
		if (!success?.status) {
			yield put({
				type: 'admin/SET_STATE',
				payload: {
					loading: false,
				},
			})
		}
	} catch (err) {
		console.log(err);
	}
}

export default function* rootSaga() {
    yield all([takeEvery(actionTypes.ALL_REPORT, ALL_REPORT)]);
}
