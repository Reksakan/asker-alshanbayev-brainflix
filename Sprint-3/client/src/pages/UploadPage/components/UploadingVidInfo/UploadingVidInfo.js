import React, {Component} from 'react'; 
import './UploadingVidInfo.scss';
import bike from '../../../../assets/Images/Upload-video-preview.jpg';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid'; 
import { Link } from 'react-router-dom';


const API_URLS = process.env.REACT_APP_API_URL;

class UploadingVidInfo extends React.Component {
  
  state = {
    id: uuidv4(),
    title: '',
    channel: '',
    image: 'https://i.imgur.com/lt0WHIq.jpeg'
  }

  handleVidPublish = e => {
    e.preventDefault();
    console.log('this.state', this.state);          //DELETE
  
      axios
      .post(`${API_URLS}`, this.state)
      .then(output => {
          const ID = output.id;
        axios
        .post(`${API_URLS}/videos`, 
        {
          id: ID,
          title: output.title,
          channel: output.channel,
          image: output.image
        })
      }
      )
      

  }

  handleInputChange = e => {
    this.setState ({
      [e.target.name]: e.target.value
    })
  }

  render() {
    return (
      <>
        <h2 className="upload__header">Upload Video</h2>
        <form className="upload__form" id="commentsForm">    
          <section className="upload__section">
            <div className="upload__video-box">
              <h3 className="upload__section-header">VIDEO THUMBNAIL</h3>
              <img className="upload__vid" src={bike}></img>
            </div>
            <div className="text__sector">    
              <h3 className="text__title">TITLE YOUR VIDEO</h3>
              <input 
                className="text__title-input" 
                type="text" 
                name="title"
                onChange={this.handleInputChange}
                value={this.state.title}
               /*  placeholder="Add a title to your video" */ required/>
              
              <h3 className="text__description">ADD A VIDEO DESCRIPTION</h3>
              <input 
                className="text__description-input" 
                type="text"
                name="channel" 
                onChange={this.handleInputChange}
                value={this.state.description}
                /* placeholder="Add a description of your video"  */
                required/>
            </div>
          </section>
            
          <span className="upload__commitment">
            <Link to="/">
              <button className="upload__button-cancel" type="submit" id="signUpBtnCancel">CANCEL</button>
            </Link>
            
            <button className="upload__button-publish" onClick={this.handleVidPublish} type="submit"  id="signUpBtnPublish">PUBLISH</button>
          </span>
        </form>
      </>
    )
  }
}

export default UploadingVidInfo;