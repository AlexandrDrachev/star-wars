import { take, call, put } from "redux-saga/effects";

import { appStateTestSaga } from "./app-actions";

export function* appSagaTestWatcher() {
    while (true) {
        yield take("APP_STATE_TEST_ACTION");
        yield call(appSagaTestWorker);
    }
}

function* appSagaTestWorker() {
    yield put(appStateTestSaga());
}