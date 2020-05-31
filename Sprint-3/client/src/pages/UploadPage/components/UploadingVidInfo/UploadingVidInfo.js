import React, {Component} from 'react'; 
import './UploadingVidInfo.scss';
import bike from '../../../../assets/Images/Upload-video-preview.jpg';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid'; 


const API_URLS = process.env.REACT_APP_API_URL;

class UploadingVidInfo extends React.Component {
  
  state = {
    id: uuidv4(),
    title: '',
    channel: "Ultra",
    image: 'https://i.imgur.com/lt0WHIq.jpeg',
    description: '',
    views: "342,234",
    likes: "234,423",
    duration: "5:04",
    video: 'https://i.imgur.com/lt0WHIq.jpeg',
    timestamp: 1542262984046,
    comments: [
      {
				"name": "Max Furtsev",
				"comment": "They BLEW the ROOF off at their last show, once everyone started figuring out they were going. This is still simply the greatest opening of acconcert I have EVER witnessed.",
				"id": uuidv4(),
				"likes": 0,
				"timestamp": 1545162149000
			},
			{
				"name": "Nata Pak",
				"comment": "Every time I see him shred I feel so motivated to get off my couch and hop on my board. He’s so talented! I wish I can ride like him one day so I can really enjoy myself!",
				"id": uuidv4(),
				"likes": 0,
				"timestamp": 1544595784046
			},
			{
				"name": "Daniyar Kanat",
				"comment": "How can someone be so good!!! You can tell he lives for this and loves to do it every day. Everytime I see him I feel instantly happy! He’s definitely my favorite ever!",
				"id": uuidv4(),
				"likes": 0,
				"timestamp": 1542262984046
			}
    ]
  }

  handleInputChange = e => {
    this.setState ({
      [e.target.name]: e.target.value
    })
  }

  handleVidPublish = e => {
    e.preventDefault();
    console.log('this.state', this.state);
    
    const vidToSubmit = this.state;
    axios
    .post(`${API_URLS}`, vidToSubmit)
    .then(response => console.log('New Vid: ', response.data));
    
    axios
    .post(`${API_URLS}/videos`, vidToSubmit)
    .then(response => console.log('New Vid description: ', response.data));


    this.setState({
      title: '',
      description: ''
    });
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
                placeholder="Add a title to your video" required/>
              
              <h3 className="text__description">ADD A VIDEO DESCRIPTION</h3>
              <input 
                className="text__description-input" 
                type="text"
                name="description" 
                onChange={this.handleInputChange}
                value={this.state.description}
                placeholder="Add a description of your video" 
                required/>
            </div>
          </section>
            
          <span className="upload__commitment">
            <button className="upload__button-cancel" type="submit" id="signUpBtnCancel">CANCEL</button>
            <button className="upload__button-publish" onClick={this.handleVidPublish} type="submit"  id="signUpBtnPublish">PUBLISH</button>
          </span>
        </form>
      </>
    )
  }
}

export default UploadingVidInfo;