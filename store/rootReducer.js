import { combineReducers } from 'redux';
import auth from './auth/reducer';
import app from './app/reducer';
import dashboard from './dashboard/reducer';
import admin from './admin/reducer';
import result from './result/reducer';
import polling from './pollingunit/reducer';
import states from './states/reducer';
import agent from './agent/reducer';
import party from './party/reducer';
import report from './report/reducer';

export default combineReducers({
	auth,
	app,
	dashboard,
	admin,
	result,
	polling,
	states,
	agent,
	party,
	report,
});
