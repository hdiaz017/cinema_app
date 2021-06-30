import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Modal from 'react-modal';

import { useAppSelector } from '../app/hooks';
import { MovieScreen } from './MovieScreen';

import { MoviesDiv, MovieImage, MovieCardDiv } from '../styles/MovieCardStyle';

export const MovieCard = () => {
   const { movies } = useAppSelector((state) => state.movie);
   let location = useLocation();
   return (
      <MoviesDiv>
         {movies.map((m) => (
            <MovieCardDiv key={m.id}>
               <Link
                  to={{
                     pathname: `./movie/${m.id}`,
                     // pathname: `./movie/${m.title.replace(/\s/g, '')}`,
                     state: { background: location },
                  }}
               >
                  <MovieImage
                     src={m.url_front}
                     alt={m.title}
                     key={m.id}
                     // onClick={openModal}
                  />
               </Link>
            </MovieCardDiv>
         ))}
      </MoviesDiv>
   );
};
