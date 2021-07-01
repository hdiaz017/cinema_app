import React, { useEffect } from 'react';
import styled from 'styled-components';

import { useAppDispatch } from '../app/hooks';

import { fetchMovies } from '../reducers/movieReducer';
import { MovieCard } from './MovieCard';
import { NavBar } from './NavBar';

export const HomeScreen = () => {
   const dispatch = useAppDispatch();

   useEffect(() => {
      dispatch(fetchMovies());
   }, [dispatch]);

   const HomeDiv = styled.div`
      background-color: #141414;
   `;

   return (
      <HomeDiv>
         <NavBar />

         <MovieCard />
      </HomeDiv>
   );
};
