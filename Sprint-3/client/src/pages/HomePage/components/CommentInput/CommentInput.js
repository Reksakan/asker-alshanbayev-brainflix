import React from 'react';
import './CommentInput.scss';

const CommentInput = (props) => {
    return (
      <section className="comment-section">
        <h2 className="comment">3 Comments</h2>
        <label className="comment__text-title">JOIN THE CONVERSATION</label>
        <div className="comment__form" id="commentsForm">    
            <div className="comment__avatar"></div>
            <form className="comment__input" name="comment-section" onSubmit={props.addNewComm}>  
              <input className="comment__text-input" type="text" name="commentText"  placeholder="Add a new comment"/>
              <button className="comment__signUpBtn" type="submit" id="signUpBtn">COMMENT</button>
            </form>
        </div>
      </section>
    )
}

export default CommentInput;