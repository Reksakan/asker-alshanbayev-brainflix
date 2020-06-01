import React from 'react';
import './CurrentVid.scss';
import play from '../../../../assets/Icons/PNG/Icon-play.png';
import full from '../../../../assets/Icons/PNG/Icon-fullscreen.png';
import volume from '../../../../assets/Icons/PNG/Icon-volume.png';

const CurrentVid = ({currentVid}) => {
  if (typeof currentVid != 'undefined') {   
    return (
      <div className="video-box">
        <div className="video-box__image-border">
          <video className="current-video" poster={currentVid.image}>
            <source src={currentVid.image} type="video/mp4"></source>
          </video>
          <img className="button__play" src={play} alt="play" />
          <div className="button__back-play"> </div>
          <img className="button__full" src={full} alt="play" />
          <img className="button__volume" src={volume} alt="play" />
          <div className="button__back-full-volume"></div>
          <div className="button__line-box"></div>
          <div className="button__line-level"></div>
          <div className="button__line-time">0:00/0:42</div>
        </div>
        
      </div>
        
    );
  }
}
export default CurrentVid; 