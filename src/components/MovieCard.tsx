import React from 'react';

import { useAppSelector } from '../app/hooks';

import {
   MoviesDiv,
   MovieImage,
   MovieTitle,
   MovieCardDiv,
} from '../styles/MovieCardStyle';

export const MovieCard = () => {
   const { movies } = useAppSelector((state) => state.movie);

   return (
      <MoviesDiv>
         {movies.map((m) => (
            <MovieCardDiv>
               <MovieImage src={m.url} alt={m.title} key={m.id} />
               <MovieTitle>{m.title}</MovieTitle>
            </MovieCardDiv>
         ))}
      </MoviesDiv>
   );
};
