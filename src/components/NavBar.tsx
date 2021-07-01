import React from 'react';
import {
   NavDiv,
   TitleH1,
   InputSearch,
   LogOutLink,
} from '../styles/NavBarStyles';

export const NavBar = () => {
   return (
      <NavDiv>
         <TitleH1>NETFLIX</TitleH1>
         <InputSearch placeholder='Títulos, personas, géneros' />
         <LogOutLink>Log out</LogOutLink>
      </NavDiv>
   );
};
