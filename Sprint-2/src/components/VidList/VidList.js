import React from 'react';
import './VidList.scss'

const VidList = ({listOfVid}) => {  
  
  const array = listOfVid.map(vid => {
    return (
      <section className="video" key={vid.id}>
        <img className="video__img" src={vid.image} alt={vid.image}></img>
        <div className="video__text">
          <span className="video__text-title">{vid.title}</span>
          <span className="video__text-author">{vid.channel}</span>
        </div>
      </section>
    )
  })
  return (<div>{array}</div>)
}

export default VidList;