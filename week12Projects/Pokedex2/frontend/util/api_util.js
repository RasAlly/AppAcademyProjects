export const fetchAllPokemon = () => {
  return $.ajax({
    method: "GET",
    url: "/api/pokemon"
  })
}

export const fetchPokemon = (pokeId) => {
  return $.ajax({
    method: 'GET',
    url: `/api/pokemon/${pokeId}`
  })
}

//
export const fetchItem = () => {

}

// for items we need the ID of the pokemon
export const fetchItems = (pokeId) => {
  return $.ajax({
    method: 'GET'
  })

}

