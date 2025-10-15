import React from 'react'
import VideoBackground from './VideoBackground'
import VideoTitle from './VideoTitle'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const MainContainer = () => {

  const moviesList = useSelector(store => store.movies.topRatedMovies)
  const video = useSelector((store) => store.movies.mainMovie);
  const navigate = useNavigate()

  if(!moviesList) return 
  const mainMovie = moviesList[5]

  const {title, overview, id} = mainMovie

  const playMovie =() =>{
    if( !mainMovie || !video) return 
    navigate("/watch", { state: { movie: mainMovie, video } });
  }

  return (
    <div className='pt-[15%] md:pt-0 bg-black'>
      <VideoTitle title={title} overview={overview} playMovie={playMovie}/>
      <VideoBackground id={id} />
    </div>
  )
}

export default MainContainer