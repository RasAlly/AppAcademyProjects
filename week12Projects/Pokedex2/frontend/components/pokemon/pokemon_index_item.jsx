import React from "react";
import { Link } from "react-router-dom";


const PokemonIndexItem = (props) => {
    return (
        <li className="pokemon-index-item">
            <Link to={`/pokemon/${props.pokemon.id}`}>  
            {props.pokemon.id} 
             <img src={props.pokemon.imageUrl}/>
             {props.pokemon.name}
             
            </Link>
        </li>
    )
}

//if you haven't built a slice of items state 


export default PokemonIndexItem;