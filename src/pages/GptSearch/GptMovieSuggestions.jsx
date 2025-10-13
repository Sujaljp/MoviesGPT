import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from '../../components/MovieList'

const GptMovieSuggestions = () => {
  const moviesData = useSelector(store=> store.movies.gptMovies)

  if(!moviesData) return null
  return (
    <div className='p-4 m-4 bg-black/90 text-white h-[65vh]  overflow-y-scroll scrollbar-hide'>
      {moviesData.map((movies)=> <MovieList key={movies.name} title={movies.name} movies={movies.list}/>)}
    </div>
  )
}

export default GptMovieSuggestions