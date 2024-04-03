import MoviesSlider from '../MoviesSlider'

import './index.css'

const PrimeVideo = props => {
  const {moviesList} = props

  const actionMovieList = moviesList.filter(
    eachMovie => eachMovie.categoryId === 'ACTION',
  )

  const comedyMovieList = moviesList.filter(
    eachMovie => eachMovie.categoryId === 'COMEDY',
  )

  return (
    <div className="main-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
        alt="prime video"
        className="prime-image"
      />
      <div className="prime-videos-container">
        <h1>Action Movies</h1>
        <MoviesSlider movieList={actionMovieList} />
        <h1>Comedy Movies</h1>
        <MoviesSlider movieList={comedyMovieList} />
      </div>
    </div>
  )
}

export default PrimeVideo
