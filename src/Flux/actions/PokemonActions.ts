import { Dispatch } from "redux";
import { POKEMON_FAIL, POKEMON_LOADING, POKEMON_SUCCESS } from "./PokemonConst";
import axios from "axios";
import { PokemonDispatchTypes } from "./PokemonTypes";

export const getPokemon = (pokemon: string) => async (
  dispatch: Dispatch<PokemonDispatchTypes>
) => {
  try {
    dispatch({
      type: POKEMON_LOADING,
    });

    const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);

    dispatch({
      type: POKEMON_SUCCESS,
      payload: res.data,
    });
  } catch (e) {
    dispatch({
      type: POKEMON_FAIL,
    });
  }
};
