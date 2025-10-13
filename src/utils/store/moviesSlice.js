import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    topRatedMovies:null,
    nowPlayingMovies: null,
    popularMovies: null,
    upcomingMovies:null,
    mainMovie: null,
    gptMovies: null,
  },
  reducers: {
    addTopRatedMovies: (state, action) => {
      state.topRatedMovies =  action.payload;
    },
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies =  action.payload;
    },
    addPopularMovies: (state, action) => {
      state.popularMovies =  action.payload;
    },
    addUpcomingMoves: (state, action) => {
      state.upcomingMovies =  action.payload;
    },
    addMainMovie: (state, action) =>{
      state.mainMovie = action.payload
    },
    addGptMovies: (state, action) =>{
      state.gptMovies = action.payload.moviesData
    }
  },
});

export const { addNowPlayingMovies,addPopularMovies,addTopRatedMovies,addUpcomingMoves, addMainMovie,addGptMovies} = moviesSlice.actions;
export default moviesSlice.reducer;
