import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import MovieList from '../../components/MovieList'
import MovieModal from '../../components/MovieModal'

const GptMovieSuggestions = () => {
  const moviesData = useSelector(store=> store.movies.gptMovies)

  const [selectedMovie, setSelectedMovie] = useState(null);

  const handleCardClick = (movie) => {
    setSelectedMovie(movie);
  };
  const closeModal = () => setSelectedMovie(null);

  if(!moviesData) return null
  return (
    <div className='p-6 md:pb-8 px-6 md:px-12 m-4 bg-black/90 text-white h-[65vh]  overflow-y-scroll scrollbar-hide'>
      {moviesData.map((movies)=> <MovieList key={movies.name} title={movies.name} movies={movies.list} onCardClick={handleCardClick}/>)}

      {selectedMovie && (
        <MovieModal movie={selectedMovie} onClose={closeModal} />
      )}
    </div>
  )
}

export default GptMovieSuggestions