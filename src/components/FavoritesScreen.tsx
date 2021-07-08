import React, { useEffect } from 'react';
import styled from 'styled-components';

import { useAppDispatch, useAppSelector } from '../app/hooks';

import { fetchMovies } from '../reducers/movieReducer';

import { MovieList } from './MovieList';

const FavsDiv = styled.div`
   background-color: #141414;
`;
export const FavoritesScreen = () => {
   const dispatch = useAppDispatch();
   const { favorites } = useAppSelector((state) => state.movie);

   useEffect(() => {
      dispatch(fetchMovies());
   }, [dispatch]);

   return (
      <FavsDiv>
         <MovieList favoritesMovies={favorites} />
      </FavsDiv>
   );
};
