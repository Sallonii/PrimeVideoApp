import Popup from 'reactjs-popup'
import ReactPlayer from 'react-player'

import {IoMdClose} from 'react-icons/io'

import 'reactjs-popup/dist/index.css'

import './index.css'

const MovieItem = props => {
  const {movieDetails} = props
  return (
    <div className="popup-container">
      <Popup
        modal
        trigger={<img src={movieDetails.thumbnailUrl} alt="thumbnail" />}
        className="popup-content"
      >
        {close => (
          <>
            <button
              type="button"
              className="close-button"
              data-testid="closeButton"
              onClick={() => close()}
            >
              <span>Close Button</span>
              <IoMdClose />
            </button>
            <div className="responsive-container">
              <ReactPlayer url={movieDetails.videoUrl} />
            </div>
          </>
        )}
      </Popup>
    </div>
  )
}
export default MovieItem
