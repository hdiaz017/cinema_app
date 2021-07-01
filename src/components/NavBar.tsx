import { useAppDispatch } from '../app/hooks';
import { useForm } from '../hooks/useForm';
import { logout } from '../reducers/authReducer';
import {
   fetchMoviesBySearch,
   removeSearchedMovies,
} from '../reducers/movieReducer';
import { useHistory } from 'react-router-dom';
import {
   NavDiv,
   TitleH1,
   InputSearch,
   LogOutLink,
} from '../styles/NavBarStyles';

export const NavBar = () => {
   const history = useHistory();
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
      dispatch(fetchMoviesBySearch(search));
   };

   const handleLogout = () => {
      dispatch(logout());
   };
   return (
      <NavDiv>
         <TitleH1 onClick={handleClick}>NETFLIX</TitleH1>
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
