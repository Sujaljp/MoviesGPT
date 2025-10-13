import React from 'react'
import VideoBackground from './VideoBackground'
import VideoTitle from './VideoTitle'
import { useSelector } from 'react-redux'

const MainContainer = () => {

  const movies = useSelector(store => store.movies.topRatedMovies)

  if(!movies) return

  const mainMovie = movies[5]

  const {title, overview, id} = mainMovie

  return (
    <div className='pt-[15%] md:pt-0 bg-black'>
      <VideoTitle title={title} overview={overview}/>
      <VideoBackground id={id}/>
    </div>
  )
}

export default MainContainer