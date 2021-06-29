import React from 'react';
import { Link } from 'react-router-dom';
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
               <Link to={`./movie/${m.title.replace(/\s/g, '')}`}>
                  <MovieImage
                     src={m.url}
                     alt={m.title}
                     key={m.id}
                     onClick={() => console.log('click')}
                  />
               </Link>
               <MovieTitle>{m.title}</MovieTitle>
            </MovieCardDiv>
         ))}
      </MoviesDiv>
   );
};
