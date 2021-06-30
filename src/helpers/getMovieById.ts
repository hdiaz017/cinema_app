import { Movie } from '../reducers/movieReducer';

export const getMovieById = (id: string, movies: Movie[]) => {
   // eslint-disable-next-line eqeqeq
   return movies.find((movie) => movie.id == id);
};
