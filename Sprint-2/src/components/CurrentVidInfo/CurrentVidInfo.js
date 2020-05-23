import React from 'react';
import './CurrentVidInfo.scss';
import eye from '../../assets/Icons/SVG/Icon-views.svg';
import like from '../../assets/Icons/SVG/Icon-likes.svg';
import {Link, RichText, Date} from 'prismic-reactjs';


const CurrentVidInfo = ({currentVid})=> {
  return (
      <section className="description">
        <h1>{currentVid.title}</h1>
        <article className="description__title">
          <div className="description__author">
            <span>By {currentVid.channel}</span>
            <span>{(new Intl.DateTimeFormat('en-GB').format(currentVid.timeStamp))}</span> {/* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat */}
          </div>
          <div className="description__status">
            <span className="description__viewed">
              <img src={eye}></img>
              <p className="description__viewed--margins">{currentVid.views}</p>
            </span>
            <span className="description__liked">
              <img src={like}></img>
              <p className="description__viewed--margins">{currentVid.likes}</p>
            </span>
          </div>
        </article>

        <p className="description__text">{currentVid.description}</p>
      </section>
    );
}

export default CurrentVidInfo;