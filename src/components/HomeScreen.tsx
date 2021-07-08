import React, { useEffect } from 'react';
import styled from 'styled-components';

import { useAppDispatch, useAppSelector } from '../app/hooks';

import { fetchMovies } from '../reducers/movieReducer';

import { MovieList } from './MovieList';

const HomeDiv = styled.div`
   background-color: #141414;
`;
export const HomeScreen = () => {
   const dispatch = useAppDispatch();
   const { movies, moviesBySearch } = useAppSelector((state) => state.movie);

   useEffect(() => {
      dispatch(fetchMovies());
   }, [dispatch]);

   return (
      <HomeDiv>
         <MovieList homeMovies={movies} searchedMovies={moviesBySearch} />
      </HomeDiv>
   );
};
