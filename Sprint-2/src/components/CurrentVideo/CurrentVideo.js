import React from 'react';
import './CurrentVideo.scss';
import playingnow from '../../assets/Video/BrainStation Sample Video.mp4';

class CurrentVideo extends React.Component {
  render () {
      return (
          <figure className="video-box">
            <video controls className="current-video">
              <source src={playingnow} type="video/mp4"></source>
            </video>
          </figure>
          
      );
  };
}

export default CurrentVideo; 