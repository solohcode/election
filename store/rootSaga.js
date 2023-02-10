import { all } from 'redux-saga/effects';
import AppSaga from './app/saga';
import AuthSaga from './auth/saga';
import DashboardSaga from './dashboard/saga';
import adminSaga from './admin/saga';
import resultSaga from './result/saga';
import pollingSaga from './pollingunit/saga';
import stateSaga from './states/saga';
import agentSaga from './agent/saga';
import partySaga from './party/saga';

export default function* rootSaga() {
  yield all([
    AppSaga(),
    AuthSaga(),
    DashboardSaga(),
    adminSaga(),
    resultSaga(),
    pollingSaga(),
    stateSaga(),
    agentSaga(),
    partySaga(),
  ]);
}
