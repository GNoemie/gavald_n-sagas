import React from 'react';
import { connect } from 'react-redux';
import Target from '../components/Target';
import Info from '../components/Info';
import ButtonStart from '../components/ButtonStart';
import ButtonStop from '../components/ButtonStop';

// FIXME: maybe, do something about this ?
const mapStateToProps = state => ({
  lives: state.game.lives,
  score: state.game.score,
  isStarted: state.game.isStarted,
  targets: state.targets
});

const GameLayout = ({ isStarted, lives, score, dispatch, targets }) => (
  <div
    style={{
      position: 'fixed',
      backgroundColor: '#21222C',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      width: '100vw',
      height: '100vh',
      margin: 'auto'
    }}
  >
    {isStarted ? (
      <React.Fragment>
        <ButtonStop onClick={() => dispatch({ type: 'GAME_STOP_REQUESTED' })} />
        <Info lives={lives} score={score} />

        {
          targets.map(target => {
            return <Target key={target.id} x={target.x} y={target.y} value={target.value}
                    onClick={() => dispatch({ type: 'DELETE_TARGET_REQUESTED', id: target.id })}/>
          })
        }
      </React.Fragment>
    ) : (
      <React.Fragment>
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            margin: 'auto',
            width: '70%',
            height: '20%'
        }}>
          <ButtonStart difficulty="low" onClick={(speed) => dispatch({ type: 'GAME_START_REQUESTED', speed: speed })} />
          <ButtonStart difficulty="mild" onClick={(speed) => dispatch({ type: 'GAME_START_REQUESTED', speed: speed })} />
          <ButtonStart difficulty="hard" onClick={(speed) => dispatch({ type: 'GAME_START_REQUESTED', speed: speed })} />
        </div>
      </React.Fragment>
    )}
  </div>
);

export default connect(mapStateToProps)(GameLayout);
