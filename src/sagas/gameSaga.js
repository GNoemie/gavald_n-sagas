import { put, takeEvery, select } from 'redux-saga/effects'
import { getGame, getTargets } from './selectors'
import { delay } from 'redux-saga'

function *gameSaga() {
    yield takeEvery('GAME_START_REQUESTED', gameStart)
    yield takeEvery('GAME_STOP_REQUESTED', gameStop)
}

function *gameStart() {
    yield put({type: 'GAME_START'})

    let game = yield select(getGame);
    while (game.isStarted) {
        yield delay(1000);

        yield put({
            type: 'ADD_TARGET',
            newElement: {
                value: Math.floor(Math.random() *10),
                x: Math.random() * 100,
                y: Math.random() * 100
            }
        })
    }
}

function *gameStop() {
    yield put({type: 'GAME_STOP'})
}

export default gameSaga;