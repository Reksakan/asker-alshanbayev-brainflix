import React from 'react';
import { Link } from 'react-router-dom'; 
import './Header.scss';
import Logos from '../../../../assets/Logo/Logo-brainflix.svg'
import avatar from '../../../../assets/Images/Mohan-muruge.jpg'

class Header extends React.Component {
  render () {
    return (
      <div className="header">
        <Link to="/">
          <img className="header__logo" src={Logos}/>
        </Link>
        <form className="header__search">
          <div>
            <span className="header__search-loupe"></span>
            <input className="header__search-input" type="text" name="search" placeholder="Search" required/>
          </div>
          <div className="header__upload">
            <Link to="/upload">
              <button className="header__upload-button"> + UPLOAD</button>
            </Link>
            <img className="header__ava" src={avatar} alt="userAvatar"></img>
          </div>
        </form>
      </div>
    );
  };
}

export default Header; 