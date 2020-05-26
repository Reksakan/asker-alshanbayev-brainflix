import React from 'react';
import './CurrentVid.scss';
import play from '../../assets/Icons/PNG/Icon-play.png';
import pause from '../../assets/Icons/SVG/Icon-pause.svg';

const CurrentVid = ({currentVid}) => {
  console.log('CurrentVid passes twice, why??!!!!!!!!!!!!!!!!!!!!!!!!!!!!  ', currentVid)
  if (typeof currentVid != 'undefined') {   
  
    console.log('What is coming to CurrentVid as a Props', currentVid.image);
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