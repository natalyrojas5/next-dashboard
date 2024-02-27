"use client";

import { createSelector } from '@reduxjs/toolkit';
import { useAppSelector } from '../../store/index';
import { PokemonGrid } from './PokemonGrid';
import { SimplePokemon } from '../interfaces/simple-pokemon';
import { useState } from 'react';
import { IoHeartOutline } from 'react-icons/io5';

const buildFavoritePokemons = createSelector(
  [(state: any) => state.pokemons.favorites],
  (pokemons: Record<string, SimplePokemon>) => Object.values(pokemons)
)

export const FavoritePokemons = () => {
  const favoritePokemons = useAppSelector(buildFavoritePokemons);
  const [pokemons, setPokemons] = useState(favoritePokemons)

  return (
    <>
      {
        favoritePokemons.length === 0
          ? <NoFavorites />
          : <PokemonGrid pokemons={favoritePokemons} />
      }
    </>
  )
}

export const NoFavorites = () => {
  return (
    <div className="flex flex-col h-[50vh] items-center justify-center">
      <IoHeartOutline size={150} className="text-red-500" />
      <h1 className='text-xl'>No hay favoritos</h1>
    </div>
  )
}