import { FavoritePokemons, PokemonGrid, PokemonsResponse, SimplePokemon } from "@/pokemons";
import { NoFavorites } from "@/pokemons/components/FavoritePokemons";

export const metadata = {
  title: 'Favorites',
  description: 'Ad minim sit cupidatat culpa consectetur.',
};

const PokemonsPage = () => {

  return (
    <div className="flex flex-col">
      <span className="text-5xl">Pokémons Favoritos <small className="text-blue-500">Global State</small> </span>
      <FavoritePokemons />
  
    </div>
  );
}

export default PokemonsPage;