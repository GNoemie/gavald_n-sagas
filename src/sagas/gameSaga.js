import { put, takeEvery, select } from 'redux-saga/effects'
import { getGame, getTargets } from './selectors'
import { delay } from 'redux-saga'

function *gameSaga() {
    yield takeEvery('GAME_START_REQUESTED', gameStart)
    yield takeEvery('GAME_STOP_REQUESTED', gameStop)
    yield takeEvery('DELETE_TARGET_REQUESTED', deleteTarget)
}

function *gameStart(action) {
    yield put({type: 'GAME_START'})

    let game = yield select(getGame);
    let spawnNb = 1;
    
    while (game.isStarted) {
        console.log("djdkjfslj")

        if (game.lives <= 0)
            yield gameStop();

        
        if (game.score >= 5)
            spawnNb = 2;
        if (game.score >= 15)
            spawnNb = 3;

        yield dieTarget();

        for (let i = 0; i < spawnNb; i++) {
            yield put({
                type: 'ADD_TARGET',
                newElement: {
                    value: (Math.floor(Math.random() * 7)) + 3,
                    x: 1 + Math.random() * 98,
                    y: 1 + Math.random() * 98,
                    id: Math.random()
                }
            })
        }

        yield put({
            type: 'DECREMENT_TARGET_VALUE',      
        })

        game = yield select(getGame);
        yield delay(1000 * action.speed);
    }
}

function *gameStop() {
    yield put({type: 'GAME_STOP'})
}

function *deleteTarget(action) {
    yield put({
        type: 'DELETE_TARGET',
        id: action.id
    })
}

function *dieTarget() {
    let targets = yield select(getTargets);
    for (let target of targets) { //foreach does not work ????
        if (target.value <= 1)
            yield put({
                type: 'DIE_TARGET',
                id: target.id
            })
    }
}

export default gameSaga;