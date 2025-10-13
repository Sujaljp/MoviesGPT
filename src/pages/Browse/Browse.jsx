import React from 'react'
import Header from '../../components/Header'
import useMoviesPlaylist from '../../hooks/useNowPlayingMovies'
import MainContainer from './components/MainContainer'
import SecondaryContainer from './components/SecondaryContainer'

const Browse = () => {
    useMoviesPlaylist()
  return (
    <div className='scrollbar-hide bg-black'>
        <Header/>

        <MainContainer/>
        <SecondaryContainer/>
        {/* 
            Main Container
                - Video background
                - Video title
            Secondary Container
                - MoviesList * n
                    - movie card * n
         */}


    </div>
  )
}

export default Browse