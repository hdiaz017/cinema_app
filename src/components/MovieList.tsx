import React, { FC } from 'react';

import { Movie } from '../reducers/movieReducer';

import { MoviesDiv } from '../styles/MovieCardStyle';
import { MovieCard } from './MovieCard';

interface MovieListType {
   homeMovies?: Movie[];
   searchedMovies?: Movie[];
   favoritesMovies?: Movie[];
}

export const MovieList: FC<MovieListType> = ({
   homeMovies,
   searchedMovies,
   favoritesMovies,
}) => {
   let movies: Movie[] = [];
   if (favoritesMovies && favoritesMovies.length > 1) movies = favoritesMovies;
   else if (searchedMovies && searchedMovies.length > 1) {
      movies = searchedMovies;
   } else if (homeMovies && homeMovies.length > 1) {
      movies = homeMovies;
   } else {
      movies = [];
   }

   return (
      <MoviesDiv>
         {movies.map((m) => (
            <MovieCard movie={m} key={m.id} />
         ))}
      </MoviesDiv>
   );
};
