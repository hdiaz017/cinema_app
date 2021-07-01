import React from 'react';
import { useAppDispatch } from '../app/hooks';
import { logout } from '../reducers/authReducer';
import {
   NavDiv,
   TitleH1,
   InputSearch,
   LogOutLink,
} from '../styles/NavBarStyles';

export const NavBar = () => {
   const dispatch = useAppDispatch();
   const handleLogout = () => {
      dispatch(logout());
   };
   return (
      <NavDiv>
         <TitleH1>NETFLIX</TitleH1>
         <InputSearch placeholder='Títulos, personas, géneros' />
         <LogOutLink onClick={handleLogout}>Log out</LogOutLink>
      </NavDiv>
   );
};
