const defaultState = {
  lives: 3,
  score: 0,
  isStarted: false
};

const game = (state = defaultState, action) => {
  switch (action.type) {
    case 'GAME_START':
      return {
        ...state,
        isStarted: true
      };
    case 'GAME_STOP':
      return defaultState;
    case 'DELETE_TARGET':
      return {
        ...state,
        score: state.score + 1
      };
    case 'DIE_TARGET':
      return {
        ...state,
        lives: state.lives - 1
      };
    default:
      return state;
  }
};

export default game;
