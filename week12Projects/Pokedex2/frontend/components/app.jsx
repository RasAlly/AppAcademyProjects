import React from 'react'
import PokemonIndexContainer from './pokemon/pokemon_index_container'
import { Route, Switch } from 'react-router-dom'
import PokemonDetailContainer from './pokemon/pokemon_detail_container'


const App = () => (

    <Switch>
        <Route path="/pokemon/:pokemonId" component={PokemonDetailContainer} />
        <Route path="/" component={PokemonIndexContainer}/>

    </Switch>

  ) 

export default App

