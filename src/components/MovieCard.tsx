import React, { FC } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { Movie } from '../reducers/movieReducer';

import { MovieImage, MovieCardDiv } from '../styles/MovieCardStyle';

interface MovieCardType {
   movie: Movie;
}

export const MovieCard: FC<MovieCardType> = ({ movie }) => {
   let location = useLocation();
   return (
      <MovieCardDiv key={movie.id}>
         <Link
            to={{
               pathname: `./movie/${movie.id}`,
               // pathname: `./movie/${m.title.replace(/\s/g, '')}`,
               state: { background: location },
            }}
         >
            <MovieImage
               src={
                  movie.url_front.indexOf('null') === -1
                     ? movie.url_front
                     : 'https://images.unsplash.com/photo-1614946973832-3363a78a2026?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=668&q=80'
               }
               alt={movie.title}
               key={movie.id}
            />
         </Link>
      </MovieCardDiv>
   );
};
