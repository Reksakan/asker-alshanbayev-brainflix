import React from 'react';
import './CurrentVideo.scss';
import playingnow from '../../assets/Images/video-list-0.jpg';

class CurrentVideo extends React.Component {
  render () {
      return (
          <div className="video-box">
            <video controls className="current-video" poster={playingnow}></video>
          </div>
          
      );
  };
}

export default CurrentVideo; 