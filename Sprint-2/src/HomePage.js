import React from 'react';
import './App.scss';
import Header from './components/Header';
import CurrentVideo from './components/CurrentVideo';
import CurrentVideoDescription from './components/CurrentVideoDescription';
import CommentInput from './components/CommentInput';
import Comments from './components/Comments'
import {commentsHistory, videoList} from './DataBase.js';
import VideoList from './components/VideoList';

class HomePage extends React.Component {
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

export default HomePage;