import {
  POKEMON_FAIL,
  POKEMON_LOADING,
  POKEMON_SUCCESS,
} from "../actions/PokemonConst";
import { PokemonDispatchTypes, PokemonType } from "../actions/PokemonTypes";

interface InitialStateI {
  loading: boolean;
  pokemon?: PokemonType;
}

const initialState: InitialStateI = {
  loading: false,
};

const pokemonReducer = (
  state: InitialStateI = initialState,
  action: PokemonDispatchTypes
): InitialStateI => {
  switch (action.type) {
    case POKEMON_LOADING:
      return {
        loading: true,
      };
    case POKEMON_SUCCESS:
      return {
        loading: false,
        pokemon: action.payload,
      };
    case POKEMON_FAIL:
      return {
        loading: false,
      };
    default:
      return state;
  }
};

export default pokemonReducer;
