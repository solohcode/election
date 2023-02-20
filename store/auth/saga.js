import { all, call, put, takeEvery } from 'redux-saga/effects';
import { notification } from 'antd';
import Router from 'next/router';
import { actionTypes, logOutSuccess, setLoader, setShow } from './action';
import AuthRepository from '../../repositories/AuthRepository';

const modalSuccess = (message, description) => {
	notification.success({
		message,
		description,
	});
};

const modalWarning = (message, description) => {
	notification.warning({
		message,
		description,
	});
};

function* loginSaga({payload}) {
	try {
		yield put(setLoader(true));
		let result = yield call(AuthRepository.loginAdmins, payload.value)
		if(result?.status){
			modalSuccess('Logged in success', result.message);
			localStorage.setItem("electionToken", JSON.stringify(result.tokens))
			localStorage.setItem("electionData", JSON.stringify(result.user))
			yield put(setShow(false))
			Router.push('/election-results');
		}else{
			modalWarning("Log in error", result?.message);
		}
		yield put(setLoader(false));
	} catch (err) {
		console.log(err);
	}
}

function* forgotPassword({payload}) {
	try {
		yield put(setLoader(true));
		const result = yield call(AuthRepository.forgot_password, payload);
		if(!result.status){
			modalWarning("Error occur", result.message);
		}else{
			modalSuccess('Forgot password request sent', result.message);
		}
		yield put(setLoader(false));
	} catch (err) {
		console.log(err);
	}
}

function* resetPassword({payload}) {
    try {
        yield put(setLoader(true));
		const result = yield call(AuthRepository.reset_password, payload);
		if(!result.status){
			modalWarning("Error occur", result.message);
		}else{
			modalSuccess('Reset password', result.message);
			Router.push('/auth/login');
		}
		yield put(setLoader(false));
    } catch (err) {
        console.log(err);
    }
}

function* logOutSaga() {
	try {
		yield put(logOutSuccess());
		Router.push(`/`);
		modalWarning('Logout Successful', "Good Bye...");
		localStorage.removeItem("electionData");
		localStorage.removeItem("electionToken");
	} catch (err) {
		console.log(err);
	}
}

function* register({payload}) {
	try {
		yield put(setLoader(true));
		const result = yield call(AuthRepository.register, payload);
		if(result.status){
			modalSuccess("Success", result.message);
			Router.push(`/`);
		} else{
			modalWarning('failed', result.message);
		}
		yield put(setLoader(false));
	} catch (err) {
		console.log(err);
	}
}

export default function* rootSaga() {
    yield all([takeEvery(actionTypes.LOGIN_REQUEST, loginSaga)]);
    yield all([takeEvery(actionTypes.LOGOUT, logOutSaga)]);
    yield all([takeEvery(actionTypes.FORGOT_PASSWORD_REQUEST, forgotPassword)]);
    yield all([takeEvery(actionTypes.RESET_PASSWORD_REQUEST, resetPassword)]);
    yield all([takeEvery(actionTypes.REGISTER_REQUEST, register)]);
}
