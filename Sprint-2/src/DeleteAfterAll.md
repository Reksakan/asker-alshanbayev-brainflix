Temporary Deleted from HomePage.js 
        <CurrentVideo />        
          <div className="main-part__flex">
            <div>
              <CurrentVideoDescription />
              <CommentInput />       {/* Section of comments input, can be grabbed from SprintIII */}
              <Comments CommentsHistory={this.state.CommentsHistory}/> 
            </div>
            <aside>
              <div className="video-list__header">NEXT VIDEO</div>
              <VideoList VideoList={this.state.VideoList}/>
            </aside>
          </div>

Deleted from CurrentVid
           <video controls className="current-video">
        <source src={currentVid.image} type="video/mp4"></source>
      </video>

Comments.js

const Comments = ({comments}) => {     
  console.log('Array of comments', comments);
  const commentsList = comments.CommentsHistory.map(comment => {   
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