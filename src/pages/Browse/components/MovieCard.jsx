import React from 'react'
import { IMAGE_CDN_URL } from '../../../utils/constants'

const MovieCard = ({movie}) => {
  return (
    <div className=''>
      <img className='w-38' src={IMAGE_CDN_URL+movie.poster_path} alt="movie_poster" />
      <div>One of the greatest</div>
    </div>
  )
}

export default MovieCard