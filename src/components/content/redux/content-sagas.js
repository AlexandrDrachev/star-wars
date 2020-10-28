import { take, call, put, select, delay } from "redux-saga/effects";
import { getPlanetsSaga, toggleContentLoading } from "./content-actions";

const baseUrl = "https://swapi.dev/api/";

const getPlanets = (count) => fetch(`${baseUrl}planets/?page=${count}`)
    .then((res) => res.json())
    .then((res) => res)
    .catch((error) => console.log(error));

const extractId = (item) => {
    const idRegExp = /\/([0-9]*)\/$/;
    return item.url.match(idRegExp)[1];
};

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
    const transformPlanets = () => planets.results.map((planet) => {
        const id = extractId(planet);
        return {
            ...planet,
            id: id
        };
    });
    planets.results = yield call(transformPlanets);
    console.log('planets: ', planets);
    yield put(getPlanetsSaga(planets));
    yield put(toggleContentLoading(false));
}

export function* getResidentsWatcher() {
    while (true) {
        yield take();
        yield call(getResidentsWorker);
    }
}

function* getResidentsWorker(residents) {
    return residents.map((url) => {
        return fetch(url)
            .then((res) => res.json())
            .then((res) => res)
            .catch((error) => console.log(error))
    })
}