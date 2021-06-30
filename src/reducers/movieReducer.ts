import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

interface Movies {
   movies: Movie[];
   favorites: [];
   isLoading: boolean;
}
export type Movie = {
   id: number | string;
   poster_path: string;
   backdrop_path: string;
   url_front: string;
   url_back: string;
   title: string;
   overview: string;
   genre_ids: [];
   vote_average: number;
};

const initialState: Movies = {
   movies: [],
   favorites: [],
   isLoading: false,
};

// First, create the thunk
export const fetchMovies = createAsyncThunk('movie/fetchMovies', async () => {
   const moviesRaw = await fetch(
      'https://api.themoviedb.org/3/movie/now_playing?api_key=7e8191c022ee7ad92efd691852a7f944',
   );
   const { results } = await moviesRaw.json();

   return results.map((movie: Movie) => ({
      id: movie.id,
      url_front: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
      url_back: `https://image.tmdb.org/t/p/original${movie.backdrop_path}`,
      title: movie.title,
      overview: movie.overview,
      genre_ids: movie.genre_ids,
      vote_average: movie.vote_average,
   }));
});

export const movieSlice = createSlice({
   name: 'movie',
   // `createSlice` will infer the state type from the `initialState` argument
   initialState,
   reducers: {
      setFavorites: (state, action) => {
         state.favorites = action.payload.favorites;
      },
   },
   extraReducers: (builder) => {
      builder.addCase(fetchMovies.pending, (state) => {
         state.isLoading = true;
      });
      builder.addCase(fetchMovies.fulfilled, (state, action) => {
         state.isLoading = false;
         state.movies = action.payload;
      });
   },
});

export const { setFavorites } = movieSlice.actions;

export default movieSlice.reducer;
