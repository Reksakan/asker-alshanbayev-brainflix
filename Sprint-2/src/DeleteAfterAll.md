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

componentDidUpdate(prevProps) {
    
    console.log('PrevProps params ID', prevProps.match.params.currentVidId);
    console.log('CurrentProps params ID', this.props.match.params.currentVidId); 
    // console.log('WTF inside??? ', {api_url}+"/"+ {this.props.match.params.currentVidId} + {api_key})
    /* if ((typeof prevProps.match.params.currentVidId != 'undefined') &&
        (typeof this.props.match.params.currentVidId != 'undefined')) {
          
          if (prevProps.match.params.currentVidId !== this.props.match.params.currentVidId) {
            
            axios
            .get(`${api_url}/${this.state.match.params.currentVidId}${api_key}`)
            .then(response => {
              const currentVidId = response.data.id; 
              const currentVid = response.data;
              const currentVidComments = response.data.comments;
            
              this.setState({
                currentVidId: currentVidId,
                currentVid: currentVid,
                currentVidComments: currentVidComments
              })
            })
          }
        } */

        == Format Date ==
        <span>{(new Intl.DateTimeFormat('en-GB').format(currentVidInfo.timeStamp))}</span>

        {(new Intl.DateTimeFormat('en-GB').format(comment.timestamp))}


@import '../../partials/variables.scss';
@import '../../partials/mixins.scss';
@import '../../partials/fonts.scss';

.uploading__container {
  border: 1px solid saddlebrown;
  @include margins-mobile;
}