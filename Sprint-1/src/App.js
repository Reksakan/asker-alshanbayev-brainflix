import React from 'react';
// import logo from './logo.svg';
import './App.scss';
import Header from './components/Header/Header';
import CurrentVideo from './components/CurrentVideo/CurrentVideo';
import CurrentVideoDescription from './components/CurrentVideoDescription/CurrentVideoDescription';
import CommentInput from './components/CommentInput/CommentInput';
import Comments from './components/Comments/Comments'
import {commentsHistory, videoList} from './DataBase.js';
import VideoList from './components/Videolist/VideoList';

class App extends React.Component {
  state ={
    CommentsHistory: commentsHistory,
    VideoList: videoList
  }
  render() {
    return (
      <div>
        <Header />              {/* contains Logo + textInputArea & UploadButton + Avatar */}
        <CurrentVideo />        {/* Hero space, where current video will be played */}
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
    </div>
    ) 
}}

export default App;