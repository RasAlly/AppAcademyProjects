import { connect } from "react-redux"
import PokemonDetail from "./pokemon_detail"
import { requestSinglePokemon } from "../../actions/pokemon_actions"


const mapSTP = (state, ownProps) => {
    return ({
        poke: Object.values(state.entities.pokemon)[ownProps.match.params.pokemonId]
    })
}

// dont know why we had to key into entities. but It helped us get our state 
//to key into the pokemon object correctly. 


const mapDTP = (dispatch, ownProps) => {
    return ({
        requestSinglePokemon: () => dispatch(requestSinglePokemon(ownProps.match.params.pokemonId))
    })
}

export default connect(mapSTP, mapDTP)(PokemonDetail)