import { Movie } from '../reducers/movieReducer';

export const getMovieById = (id: string, movies: Movie[]) => {
   const numberId = parseInt(id);
   // eslint-disable-next-line eqeqeq
   return movies.find((movie) => movie.id == numberId);
};
