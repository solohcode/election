import { all, call, put, takeEvery } from 'redux-saga/effects';
import { actionTypes, getAllStatesSuccess, setLoader } from './action';
import { timeOut } from '../utilities';
import AdminRepository from '../../repositories/AuthRepository';

function* getAllStates({payload}) {
	try {
		yield put(setLoader(true));
		const result = yield call(AdminRepository.getRequests, payload);
		if(result.status){
			yield put(getAllStatesSuccess(result.data))
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
	yield all([takeEvery(actionTypes.GET_ALL_STATES, getAllStates)]);
}
