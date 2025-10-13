import React from 'react'
import { IMAGE_CDN_URL } from '../utils/constants'

const MovieCard = ({movie}) => {
  if(!movie.poster_path) return null
  return (
    <div className=''>
      <img className='w-32 md:w-38' src={IMAGE_CDN_URL+movie.poster_path} alt="movie_poster" />
      {/* <div className='w-38 text-wrap'>{movie.title}</div> */}
    </div>
  )
}

export default MovieCard