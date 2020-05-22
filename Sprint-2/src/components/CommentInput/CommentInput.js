import React, { Component } from 'react';
import './CommentInput.scss';

class CommentInput extends React.Component {
  render() {
    return (
      <section className="comment-section">
        <h2 className="comment">3 Comments</h2>
        <label className="comment__text-title">JOIN THE CONVERSATION</label>
        <form className="comment__form" id="commentsForm">    
            <div className="comment__avatar"></div>
            <div className="comment__input">  
              <textarea className="comment__text-input" name="commTextInput" placeholder="Add a new comment" required></textarea>
              <button type="submit" className="comment__signUpBtn" id="signUpBtn">COMMENT</button>
            </div>
        </form>
      </section>
    )
  }
}

export default CommentInput;