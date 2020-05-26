import React from 'react';
import './CurrentVid.scss';
import playingnow from '../../assets/Video/BrainStation Sample Video.mp4';

const CurrentVid = ({currentVid}) => {
  console.log('CurrentVid passes twice, why??!!!!!!!!!!!!!!!!!!!!!!!!!!!!  ', currentVid)
  if (typeof currentVid != 'undefined') {   
  
    console.log('What is coming to CurrentVid as a Props', currentVid.image);
    return (
      <div className="video-box">
        <video controls className="current-video" poster={currentVid.image}>
          <source src={currentVid.image} type="video/mp4"></source>
        </video>
      </div>
        
    );
  }
}
export default CurrentVid; 