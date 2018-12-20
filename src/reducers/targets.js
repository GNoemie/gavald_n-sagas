const defaultTargetState = {
    value: 67,
    x: 40,
    y: 20,
    id: 0
};

function target(state = defaultTargetState, action) {
    switch (action.type) {
        case 'DECREMENT_TARGET_VALUE':
            return {
                ...state,
                value: state.value - 1
            };

        default:
            return state;
    }
}
  
function targets(state = [], action) {
    console.log("bjr")
    switch (action.type) {
        case 'ADD_TARGET':
            return [...state, action.newElement];
        case 'DECREMENT_TARGET_VALUE':
            return state.map(t => target(t, action));
        case 'DIE_TARGET':
        return state.filter(t => t.id !== action.id)
        case 'DELETE_TARGET':
            return state.filter(t => t.id !== action.id)
        case 'GAME_STOP':
            return [];
        default:
            return state;
    }
}
  
  export default targets;