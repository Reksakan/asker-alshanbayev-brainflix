import React from 'react';
import './Comments.scss';

const Comments = ({comments}) => {     
  console.log('Array of comments', comments);
  
    const commentsList = comments.map(comment => {   
      return (
        <section className="comments-section" key={comment.id}>
          <div className="comment-single">
            <img className="comment__avatar" src="" alt=""></img>
            <article className="comment__text-box">
              <div className="comment__text-header">
                <h5 className="comment__text-user">{comment.name}</h5>  
                <span className="comment__text-date">{(new Intl.DateTimeFormat('en-US').format(comment.timestamp))}</span>
              </div>  
              <span className="comment__text-own">{comment.comment}</span>
            </article>
          </div>
        </section>      
      )
    })
    return (<div>{commentsList}</div>)
  
}

export default Comments;