import { all } from "redux-saga/effects"

import { getPlanetsWatcher } from "../components/content/redux/content-sagas";

export function* rootSaga() {
    yield all([
        getPlanetsWatcher()
    ]);
}