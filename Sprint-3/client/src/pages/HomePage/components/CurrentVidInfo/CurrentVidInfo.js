import React from 'react';
import './CurrentVidInfo.scss';
import eye from '../../../../assets/Icons/SVG/Icon-views.svg';
import like from '../../../../assets/Icons/SVG/Icon-likes.svg';
import {Link, RichText, Date, typeOf} from 'prismic-reactjs';


const CurrentVidInfo = ({currentVidInfo})=> {
  if (typeof currentVidInfo != 'undefined') {
    return (
        <section className="description">
          <h1 className="description__header">{currentVidInfo.title}</h1>
          <article className="description__title">
            <div className="description__author">
              <span>By {currentVidInfo.channel}</span>
              <span className="description__date">{(new Intl.DateTimeFormat('en-US').format(currentVidInfo.timeStamp))}</span> {/* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat */}
            </div>
            <div className="description__status">
              <span className="description__viewed">
                <img src={eye}></img>
                <p className="description__viewed--margins">{currentVidInfo.views}</p>
              </span>
              <span className="description__liked">
                <img src={like}></img>
                <p className="description__viewed--margins">{currentVidInfo.likes}</p>
              </span>
            </div>
          </article>

          <p className="description__text">{currentVidInfo.description}</p>
        </section>
    );
  }    
}

export default CurrentVidInfo;