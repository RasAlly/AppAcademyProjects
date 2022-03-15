import React from "react";
class PokemonDetail extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.requestSinglePokemon(this.props.match.params.pokemonId);
    }

    
    render() {
        console.log(this.props)
        return (
            <h1></h1>
        )
    }





}

export default PokemonDetail;