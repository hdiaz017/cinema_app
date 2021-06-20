import React from 'react';
import { useAppDispatch } from '../app/hooks';
import { logout } from '../reducers/authReducer';

export const HomeScreen = () => {
   const dispatch = useAppDispatch();

   const handleLogin = () => {
      dispatch(logout());
   };
   return (
      <div>
         Home Screen
         <button onClick={handleLogin}>click</button>
      </div>
   );
};
