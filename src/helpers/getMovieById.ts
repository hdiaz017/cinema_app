import { Movie } from '../reducers/movieReducer';

export const getMovieById = (id: string, movies: Movie[]) => {
   return movies.find((movie) => movie.id == id);
};
