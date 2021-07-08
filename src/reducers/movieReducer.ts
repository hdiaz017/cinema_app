import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

interface Movies {
   movies: Movie[];
   moviesBySearch: Movie[];
   favorites: Movie[];
   search: string;
   isLoading: boolean;
}
export type Movie = {
   id: number;
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
   moviesBySearch: [],
   favorites: [],
   search: '',
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
export const fetchMoviesBySearch = createAsyncThunk(
   'movie/fetchMoviesBySearch',
   async (search: string) => {
      const moviesRaw = await fetch(
         `https://api.themoviedb.org/3/search/movie?api_key=7e8191c022ee7ad92efd691852a7f944&query=${search}`,
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
   },
);

export const movieSlice = createSlice({
   name: 'movie',
   // `createSlice` will infer the state type from the `initialState` argument
   initialState,
   reducers: {
      setFavorites: (state, action) => {
         state.favorites.push(action.payload);
      },
      removeFavorites: (state, action) => {
         console.log(action.payload);

         const movieToRemove = state.favorites.findIndex(
            (m) => m.id === action.payload,
         );
         console.log(movieToRemove);

         if (movieToRemove !== -1) {
            state.favorites.splice(movieToRemove, 1);
         }
      },
      setSearch: (state, action) => {
         state.search = action.payload;
      },
      removeSearchedMovies: (state) => {
         state.moviesBySearch = [];
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
      builder.addCase(fetchMoviesBySearch.pending, (state) => {
         state.isLoading = true;
      });
      builder.addCase(fetchMoviesBySearch.fulfilled, (state, action) => {
         state.isLoading = false;
         state.moviesBySearch = action.payload;
      });
   },
});

export const {
   setFavorites,
   removeFavorites,
   setSearch,
   removeSearchedMovies,
} = movieSlice.actions;

export default movieSlice.reducer;
