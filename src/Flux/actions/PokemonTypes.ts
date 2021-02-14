export type PokemonType = {
  abilities: Array<PokemonAbility>;
  sprites: PokemonSprites;
  stats: Array<PokemonStat>;
};

export type PokemonAbility = {
  ability: {
    name: string;
    url: string;
  };
};

export type PokemonSprites = {
  front_default: string;
};

export type PokemonStat = {
  base_stat: number;
  stat: {
    name: string;
  };
};

export type PokemonLoading = {
  type: string;
  payload?: any;
};

export type PokemonFail = {
  type: string;
  payload?: any;
};

export type PokemonSuccess = {
  type: string;
  payload: PokemonType;
};

export type PokemonDispatchTypes =
  | PokemonLoading
  | PokemonFail
  | PokemonSuccess;
