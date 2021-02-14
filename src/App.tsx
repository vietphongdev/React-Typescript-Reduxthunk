import React, { ChangeEvent, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Store } from './Flux/store';
import {getPokemon} from "./Flux/actions/PokemonActions";

function App() {
  const dispatch = useDispatch();
  const [pokemonName, setPokemonName] = useState("");
  const pokemonState = useSelector((state: Store) => state.pokemon);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => setPokemonName(event.target.value);
  const handleSubmit = () => dispatch(getPokemon(pokemonName));

  return (
    <div className="App">
      <input type="text" onChange={handleChange}/>
      <button onClick={handleSubmit}>Search</button>
      {pokemonState.pokemon && (
        <div>
          <img src={pokemonState.pokemon.sprites.front_default} alt=""/>
          {pokemonState.pokemon.abilities.map(ability => {
            return <p>{ability.ability.name}</p>
          })}
        </div>
      )}
    </div>
  );
}

export default App;
