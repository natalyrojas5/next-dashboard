import { PokemonGrid, PokemonsResponse, SimplePokemon } from "@/pokemons";

export const metadata = {
  title: '151 Pokémons',
  description: 'Ad minim sit cupidatat culpa consectetur.',
};

const getPokemons = async (limit = 20, offset = 0): Promise<SimplePokemon[]> => {
  const data: PokemonsResponse = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)
    .then(res => res.json())

  const pokemons = data.results.map(pokemon => ({
    id: pokemon.url.split('/').at(-2)!,
    name: pokemon.name
  }))

  return pokemons;
}

const PokemonsPage = async () => {
  const pokemons = await getPokemons(151);
  return (
    <div className="flex flex-col">
      <span className="text-5xl">Listado de Pokémons <small className="text-blue-500">estático</small> </span>
      <PokemonGrid pokemons={pokemons} />
    </div>
  );
}

export default PokemonsPage;