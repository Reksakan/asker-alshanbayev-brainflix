import React from 'react';
import './CurrentVid.scss';
import play from '../../../../assets/Icons/PNG/Icon-play.png';
import pause from '../../../../assets/Icons/SVG/Icon-pause.svg';

const CurrentVid = ({currentVid}) => {
  if (typeof currentVid != 'undefined') {   
    return (
      <div className="video-box">
        <video controls className="current-video" poster={currentVid.image}>
          <source src={currentVid.image} type="video/mp4"></source>
        </video>
        {/* <img className="button__play" src={play} alt="play" />
        <div className="button__play-back"> </div> */}
       
      </div>
        
    );
  }
}
export default CurrentVid; 