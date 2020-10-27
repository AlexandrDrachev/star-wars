import { take, call, put, select, delay } from "redux-saga/effects";
import {getPlanetsSaga, toggleContentLoading} from "./content-actions";

const baseUrl = "https://swapi.dev/api/";

const getPlanets = (count) => fetch(`${baseUrl}planets/?page=${count}`)
    .then((res) => res.json())
    .then((res) => res);

export function* getPlanetsWatcher() {
    while (true) {
        const payload = yield take("GET_PLANETS_ACTION");
        const { numberPage } = payload;
        yield call(getPlanetsWorker, numberPage);
    }
}

function* getPlanetsWorker(numberPage) {
    yield put(toggleContentLoading(true));
    yield delay(800);
    const planets = yield call(getPlanets, numberPage);
    console.log('planets: ', planets);
    yield put(getPlanetsSaga(planets));
    yield put(toggleContentLoading(false));
}