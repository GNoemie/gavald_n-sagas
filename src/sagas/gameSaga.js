import { put, takeEvery, select } from 'redux-saga/effects'

function *gameSaga() {
    yield takeEvery('GAME_START_REQUESTED', gameStart)
}

function *gameStart() {
    yield put({type: 'GAME_START'})
}

export default gameSaga;