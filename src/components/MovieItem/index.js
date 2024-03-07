/* eslint-disable jsx-a11y/control-has-associated-label */
// Write your code here
import Popup from 'reactjs-popup'
import ReactPlayer from 'react-player'
import {IoMdClose} from 'react-icons/io'
import './index.css'

const MovieItem = props => {
  const {movieDetails} = props
  const {thumbnailUrl, videoUrl} = movieDetails
  return (
    <div>
      <Popup
        modal
        trigger={
          <img src={thumbnailUrl} alt="thumbnail" className="thumbnail-img" />
        }
        className="popup-content"
      >
        {close => (
          <div className="modal-container">
            <button
              type="button"
              onClick={() => close()}
              className="close-btn"
              data-testid="closeButton"
            >
              <IoMdClose size={20} color="#231f20" />
            </button>
            <div className="video-container">
              <ReactPlayer url={videoUrl} controls />
            </div>
          </div>
        )}
      </Popup>
    </div>
  )
}

export default MovieItem
