import React from 'react';
import './VideoList.scss'

const VideoList = props => {
  console.log(props);
  const array = props.VideoList.map(video => {
    return (
      <section className="video" key={video.id}>
        <img className="video__img" src={video.img} alt="image"></img>
        <div className="video__text">
          <span className="video__text-title">{video.title}</span>
          <span className="video__text-author">{video.channel}</span>
        </div>
      </section>
    )
  })
  return (<div>{array}</div>)
}


export default VideoList;