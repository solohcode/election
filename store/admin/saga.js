import { all, call, put, takeEvery } from 'redux-saga/effects';
import { actionTypes, getAdminSuccess, setLoader, getAdmin, getCooperative } from './action';
import { modalSuccess, modalWarning, timeOut, } from '../utilities';
import AdminRepository from '../../repositories/AuthRepository';

function* getAdmn({payload}) {
	try {
		yield put(getAdminSuccess([]))
		yield put(setLoader(true));
		const result = yield call(AdminRepository.getRequests, payload);
		if(result.status){
			yield put(getAdminSuccess(result))
		}
		if(result === "Token has expired") {
			timeOut()
		}
		yield put(setLoader(false));
	} catch (err) {
		console.log(err);
	}
}

function* disableOrEnableUser({payload}) {
	try {
		yield put(setLoader(true));
		const result = yield call(AdminRepository.putRequests, payload.data, 'admin/users/activate');
		if(result.status){
			modalSuccess("Success", result.message)
			if(payload.key) yield payload.dispatch(getUsers(`admin/users/${payload.key}`))
			else yield payload.dispatch(getAdmin(`admin`))
		}
		if(!result.status){
			modalWarning("Success", result.message || result)
		}
		if(result === "Token has expired") {
			timeOut()
		}
		yield put(setLoader(false));
		// modalWarning("Error", result.message)
	} catch (err) {
		console.log(err);
	}
}

function* updateAdmin({payload}) {
    try {
		yield put(setLoader(true));
		const result = yield call(AdminRepository.putRequests, payload.value);
		if(result.status){
			modalSuccess("Success", result.message)
			yield payload.dispatch(getAdmin({value:{search_term:""}}))
			yield payload.dispatch(getCooperative({value:{search_term:""}}))
		}
		if(result === "Token has expired") {
			timeOut()
		}
		yield put(setLoader(false));
		// modalWarning("Error", result.message)
    } catch (err) {
        console.log(err);
    }
}

function* upgradeUser({payload}) {
	try {
		yield put(setLoader(true));
		const result = yield call(AdminRepository.putRequests, payload.data, 'admin/upgrade-user');
		if(result.status){
			modalSuccess("Success", result.message)
			payload.dispatch(getAdmin(`admin`))
		}
		if(result === "Token has expired") {
			timeOut()
		}
		yield put(setLoader(false));
		// modalWarning("Error", result.message)
	} catch (err) {
		console.log(err);
	}
}

function* updateUserGroup({payload}) {
	try {
		yield put(setLoader(true));
		const result = yield call(AdminRepository.putRequests, payload.data, 'admin/users/user-rate-group');
		if(result.status){
			modalSuccess("Success", result.message)
			payload.dispatch(getAdmin(`admin`))
		}
		if(result === "Token has expired") {
			timeOut()
		}
		yield put(setLoader(false));
		// modalWarning("Error", result.message)
	} catch (err) {
		console.log(err);
	}
}

function* createUser({payload}) {
	try {
		yield put(setLoader(true));
		const result = yield call(AdminRepository.postRequests, payload.data, 'admin');
		if(result.status){
			modalSuccess("Success", result.message)
			yield payload.dispatch(getUsers(`admin/users/${payload.key}`))
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
	yield all([takeEvery(actionTypes.GET_ADMIN, getAdmn)]);
	yield all([takeEvery(actionTypes.ENABLE_OR_DISABLE_USER, disableOrEnableUser)]);
	yield all([takeEvery(actionTypes.UPDATE_ADMIN, updateAdmin)]);
	yield all([takeEvery(actionTypes.UPGRADE_USER, upgradeUser)]);
	yield all([takeEvery(actionTypes.UPDATE_USER_GROUP, updateUserGroup)]);
	yield all([takeEvery(actionTypes.CREATE_USER, createUser)]);
}
