import React from 'react';
import { useAppDispatch } from '../app/hooks';
import { login } from '../reducers/authReducer';

export const LoginScreen = () => {
   const dispatch = useAppDispatch();
   const newUser = {
      name: 'Luis',
      uid: 'lksjafa-2342424-fsdsff',
   };
   const handleLogin = () => {
      dispatch(login(newUser));
   };
   return (
      <div>
         Login Screen
         <button onClick={handleLogin}>click</button>
      </div>
   );
};
