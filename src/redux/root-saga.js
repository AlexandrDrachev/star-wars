import { all } from "redux-saga/effects"

import { appSagaTestWatcher } from "../components/app/redux/app-sagas";

export function* rootSaga() {
    yield all([
        testSaga(),
        appSagaTestWatcher()
    ]);
}

function* testSaga() {
    yield console.log("rootSaga is ready!");
}