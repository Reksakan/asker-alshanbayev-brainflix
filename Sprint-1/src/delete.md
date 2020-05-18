<div>
    <Header />              {/* contains Logo + textInputArea & UploadButton + Avatar */}
    <CurrentVideo />        {/* Hero space, where current video will be played */}
        <div>
          <div>
            <CurrentVideoDescription />
            <CommentsInput />       {/* Section of comments input, can be grabbed from SprintIII */}
            <Comments comments={this.props.comments}/>            Section of comments history, can be grabbed from SprintIII
          </div>
          <aside>
            <VideoList />         {/* The list of videos which where showed how to render multiple pictures */}
          </aside>
      </div>
</div>

Comment section from BandSite

<section class="convers">
        <h2 class="convers__head">Join the Conversation</h2>
        <form class="comments" id="commentsForm">
            <div class="comments__avatar"></div>
            <div class="comments__input">
                <label class="comments-name__head">NAME</label>
                <input type="text" class="comments-name" name="commNameInput" placeholder="Enter your name">
                <label class="comments-text__head">COMMENT</label>
                <textarea class="comments-text" name="commTextInput" placeholder="Add a new comment"></textarea>
                <button type="submit" class="signUpBtn box1" id="signUpBtn">COMMENT</button>
            </div>
        </form>
        <div class="comments-history"></div>
    </section>