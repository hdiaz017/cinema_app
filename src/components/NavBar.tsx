import { useAppDispatch, useAppSelector } from '../app/hooks';
import { useForm } from '../hooks/useForm';
import { logout } from '../reducers/authReducer';
import {
   fetchMoviesBySearch,
   removeSearchedMovies,
   setSearch,
} from '../reducers/movieReducer';
import { useHistory } from 'react-router-dom';
import {
   NavDiv,
   TitleH1,
   InputSearch,
   LogOutLink,
} from '../styles/NavBarStyles';
import { useEffect } from 'react';

export const NavBar = () => {
   const history = useHistory();
   const stateSearch = useAppSelector((state) => state.movie.search);
   const dispatch = useAppDispatch();
   const [{ search }, handleInputChange] = useForm({
      search: '',
   });

   const handleClick = () => {
      history.push('/');
      dispatch(removeSearchedMovies());
   };

   const handleSubmit = (e: { preventDefault: () => void }) => {
      e.preventDefault();
      dispatch(setSearch(search));
      dispatch(fetchMoviesBySearch(search));
   };

   const handleLogout = () => {
      dispatch(logout());
   };
   return (
      <NavDiv>
         <TitleH1 onClick={handleClick}>CINETFLIX</TitleH1>
         <form onSubmit={handleSubmit}>
            <InputSearch
               placeholder='Títulos, personas, géneros'
               name='search'
               onChange={handleInputChange}
               value={search}
            />
         </form>
         <LogOutLink onClick={handleLogout}>Log out</LogOutLink>
      </NavDiv>
   );
};
