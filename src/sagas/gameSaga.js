import { put, takeEvery, takeLatest, select } from 'redux-saga/effects'
import { getGame, getTargets } from './selectors'
import { delay } from 'redux-saga'

function *gameSaga() {
    yield takeLatest('GAME_START_REQUESTED', gameStart)
    yield takeLatest('GAME_STOP_REQUESTED', gameStop)
    yield takeLatest('DELETE_TARGET_REQUESTED', deleteTarget)
}

function *gameStart(action) {
    console.log("action", action)
    yield put({type: 'GAME_START'})
    console.log("spsssssss", yield select(getTargets))

    let game = yield select(getGame);
    let spawnNb = 1;
    
    while (game.isStarted) {
        console.log("spsssssss", yield select(getTargets))
      
        if (game.score >= 5)
            spawnNb = 2;
        if (game.score >= 15)
            spawnNb = 3;

        yield dieTarget();

        if (game.lives <= 0)
            yield gameStop();


        for (let i = 0; i < spawnNb; i++) {
            yield put({
                type: 'ADD_TARGET',
                newElement: {
                    value: (Math.floor(Math.random() * 7)) + 3,
                    x: 2 + Math.random() * 96,
                    y: 2 + Math.random() * 96,
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

function *moveTarget() {
    /*let targets = yield select(getTargets);
    for (let target of targets) { //foreach does not work ????
        if (target.value <= 1)
            yield put({
                type: 'DIE_TARGET',
                id: target.id
            })
    }*/
    //LETS MOVE MWAHAHAHAHA
}

export default gameSaga;