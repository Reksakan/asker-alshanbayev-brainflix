import React from 'react';
import './Comments.scss';

const Comments = props => {   
  console.log(props);  
  const commentsList = props.CommentsHistory.map(comment => {   
  return (
  <section className="comments-section" key={comment.id}>
    <div className="comment-single">
      <img className="comment__avatar" src={comment.userAvatar} alt="userAvatar"></img>
      <article className="comment__text">
        <div className="comment__text-header">
          <h5 className="comment__text-user">{comment.name}</h5>  
          <span className="comment__text-date">{comment.date}</span>
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