import { RECEIVE_POKEMON } from "../actions/pokemon_actions";
const itemsReducer = (state = {}, action) => { 
    Object.freeze(state);
    let nextState = Object.assign({}, state)
    switch (action.type) {
        case RECEIVE_POKEMON:
            nextState[action.poke.items] = action.poke.items;
            return nextState
    
        default:
            return state;
    }
}

// lets say you hit the backend route for your pokemon and in the jbuild you could get the items 
//
export default itemsReducer;

//we can recieve a pokemon, but have the payload be the pokemon items. 