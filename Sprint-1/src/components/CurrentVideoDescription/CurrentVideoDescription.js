import React from 'react';
import './CurrentVideoDescription.scss';
import eye from '../../assets/Icons/SVG/Icon-views.svg'
import like from '../../assets/Icons/SVG/Icon-likes.svg'

class CurrentVideoDescription extends React.Component {
  render () {
    return (
      <section className="description">
        <h1>BMX Rampage: 2018 Highlights</h1>
        <article className="description__title">
          <div className="description__author">
            <span>By Red Cow</span>
            <span>12/18/2018</span>
          </div>
          <div className="description__status">
            <span className="description__viewed">
              <img src={eye}></img>
              <p className="description__viewed--margins">1,001,023</p>
            </span>
            <span className="description__liked">
              <img src={like}></img>
              <p className="description__viewed--margins">110,985</p>
            </span>
          </div>
        </article>

        <p className="description__text">One a gusty day in Southern Utah, a group 25 daring mountain bikes blew the doors off what is possible on two wheels, unleashing some of the biggest moments the sport has ever seen. While mother nature only allowed for one full run before the conditions made it impossible to ride, that was all that was needed for event veteran Kyle Strait, who won the event for the second time -- eight years after his first Red Cow Rampage title</p>
      </section>
    );
  };
}

export default CurrentVideoDescription;