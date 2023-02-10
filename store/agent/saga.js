import { all, call, put, takeEvery } from 'redux-saga/effects';
import { actionTypes, getAgent, getAgentSuccess, setLoader } from './action';
import { modalSuccess, modalWarning, timeOut } from '../utilities';
import AdminRepository from '../../repositories/AuthRepository';

function* getAgents({payload}) {
	try {
		yield put(setLoader(true));
		const result = yield call(AdminRepository.getRequests, payload);
		if(result.status){
			yield put(getAgentSuccess({data: result.data, total: result.total}))
		}
		if(result === "Token has expired") {
			timeOut()
		}
		yield put(setLoader(false));
	} catch (err) {
		console.log(err);
	}
}

function* createAgent({payload}) {
	try {
		yield put(setLoader(true));
		const result = yield call(AdminRepository.postRequests, payload.data, 'agent');
		if(result.status){
			modalSuccess("Success", result.message)
			yield payload.dispatch(getAgent(`agent`))
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
	yield all([takeEvery(actionTypes.GET_ALL_AGENTS, getAgents)]);
	yield all([takeEvery(actionTypes.CREATE_AGENT, createAgent)]);
}
