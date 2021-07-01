import React, { useEffect } from 'react';
import styled from 'styled-components';

import { useAppDispatch } from '../app/hooks';
import { logout } from '../reducers/authReducer';
import { fetchMovies } from '../reducers/movieReducer';
import { MovieCard } from './MovieCard';

export const HomeScreen = () => {
   const dispatch = useAppDispatch();

   useEffect(() => {
      dispatch(fetchMovies());
   }, [dispatch]);

   const handleLogin = () => {
      dispatch(logout());
   };

   const HomeDiv = styled.div`
      background-color: black;
   `;

   const TitleH1 = styled.h1`
      color: red;
      font-size: 3rem;
      text-align: left;
      margin-left: 50px;
      margin-top: 50px;
   `;

   const InputSearch = styled.input`
      background-color: #333;
      color: #fff;
      height: 50px;
      border: none;
      border-radius: 8px;
      width: 300px;

      font-size: 1rem;
      font-weight: 500;
   `;

   const NavDiv = styled.div`
      display: flex;
      flex-flow: row wrap;
      align-items: center; ;
   `;

   return (
      <HomeDiv>
         <NavDiv>
            <TitleH1>NETFLIX</TitleH1>
            <InputSearch />
         </NavDiv>
         <MovieCard />
      </HomeDiv>
   );
};
