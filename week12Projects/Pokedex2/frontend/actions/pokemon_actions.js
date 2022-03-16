import * as APIUtil from '../util/api_util';

export const RECEIVE_ALL_POKEMON = "RECEIVE_ALL_POKEMON";
export const RECEIVE_POKEMON = 'RECEIVE_POKEMON'

export const receiveAllPokemon = (pokemon) => ({
  type: RECEIVE_ALL_POKEMON,
  pokemon
})

export const receivePoke = (poke) => {
  return {
    type: RECEIVE_POKEMON,
    poke
  }
}

export const requestAllPokemon = () => (dispatch) => (
  APIUtil.fetchAllPokemon()
    .then(pokemon => dispatch(receiveAllPokemon(pokemon)))
)

export const requestSinglePokemon = (pokeId) => dispatch => {
  return (
    APIUtil.fetchPokemon(pokeId) 
    .then(poke => dispatch(receivePoke(poke)))
  )
}