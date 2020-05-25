import React from 'react';
import './UploadingVidInfo.scss';
import bike from '../../assets/Images/Upload-video-preview.jpg'

class UploadingVidInfo extends React.Component {
  render() {
    return (
      <>
        <h2>Upload Video</h2>
        <form className="upload__form" id="commentsForm">    
          <section className="upload__section">
            <div>
              <h3>VIDEO THUMBNAIL</h3>
              <img className="upload__vid" src={bike}></img>
            </div>
            <div className="upload__input">    
              <h3>TITLE YOUR VIDEO</h3>
              <textarea className="upload__text-title" name="titleInput" placeholder="Add a title to your video" required></textarea>
              <h3>ADD A VIDEO DESCRIPTION</h3>
              <textarea className="upload__text-description" name="textInput" placeholder="Add a description of your video" required></textarea>
            </div>
          </section>
            
          <div className="upload__commitment">
            <button type="submit" className="comment__signUpBtn" id="signUpBtn">CANCEL</button>
            <button type="submit" className="comment__signUpBtn" id="signUpBtn">PUBLISH</button>
          </div>
        </form>
      </>
    )
  }
}

export default UploadingVidInfo;