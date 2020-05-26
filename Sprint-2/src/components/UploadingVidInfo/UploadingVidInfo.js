import React from 'react';
import './UploadingVidInfo.scss';
import bike from '../../assets/Images/Upload-video-preview.jpg'

class UploadingVidInfo extends React.Component {
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
              <textarea className="text__title-input" name="titleInput" placeholder="Add a title to your video" required></textarea>
              <h3 className="text__description">ADD A VIDEO DESCRIPTION</h3>
              <textarea className="text__description-input" name="textInput" placeholder="Add a description of your video" required></textarea>
            </div>
          </section>
            
          <div className="upload__commitment">
            <button type="submit" className="upload__button-cancel" id="signUpBtnCancel">CANCEL</button>
            <button type="submit" className="upload__button-publish" id="signUpBtnPublish">PUBLISH</button>
          </div>
        </form>
      </>
    )
  }
}

export default UploadingVidInfo;