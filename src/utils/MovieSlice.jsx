import { createSlice } from "@reduxjs/toolkit";

const MovieSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    movieTrailer:null
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
    addTrendingMovies: (state, action) => {
      state.trendingMovies = action.payload;
    },
    addUpcomingMovies: (state, action) => {
      state.upcomingMovies = action.payload;
    },
    addMovieTrailer:(state,action)=>{
      state.movieTrailer=action.payload
    }
  },
});

export const { addNowPlayingMovies,addMovieTrailer,addPopularMovies,addTrendingMovies,addUpcomingMovies } = MovieSlice.actions;
export default MovieSlice.reducer;
