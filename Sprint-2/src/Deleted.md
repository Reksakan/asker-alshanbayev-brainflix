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
              {/* <VideoList VideoList={this.state.VideoList}/> */}
            </aside>
          </div>