import React, { useEffect } from 'react';

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

   return (
      <div>
         Home Screen
         <button onClick={handleLogin}>click</button>
         <MovieCard />
      </div>
   );
};
