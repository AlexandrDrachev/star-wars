import { all } from "redux-saga/effects"

import { appSagaTestWatcher } from "../components/app/redux/app-sagas";
import { getPlanetsWatcher, getPlanetWatcher } from "../components/content/redux/content-sagas";

export function* rootSaga() {
    yield all([
        testSaga(),
        appSagaTestWatcher(),
        getPlanetsWatcher()
    ]);
}

function* testSaga() {
    yield console.log("rootSaga is ready!");
}