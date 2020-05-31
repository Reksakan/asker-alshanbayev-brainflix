import React from 'react';
import './HomePage.scss';
import Header from '../../pages/HomePage/components/Header';
import CurrentVid from '../../pages/HomePage/components/CurrentVid';
import CurrentVidInfo from '../../pages/HomePage/components/CurrentVidInfo';
import CommentInput from '../../pages/HomePage/components/CommentInput';
import Comments from '../../pages/HomePage/components/Comments'
import VidList from '../../pages/HomePage/components/VidList';
import UploadingVidInfo from '../UploadPage/components/UploadingVidInfo/';
import axios from 'axios';



const API_URLS = process.env.REACT_APP_API_URL;

class HomePage extends React.Component {

  state = {
      currentVidId: '',
      currentVid: {},
      currentVidComments: [],
      listOfVid: []
  }
  //Too long code but currently I can't do anything
  componentDidMount() {
    
    axios
    .get(`${API_URLS}`)
    .then(response => {
      this.setState ({
        listOfVid: response.data
      })
    })  
    
    axios
    .get(`${API_URLS}/videos/`)
    .then(output => {
      // console.log('Current vid data: ', output.data);
      // console.log('Current vid data[0]: ', output.data[0]);
      this.setState({
        currentVidId: output.data[0].id,
        currentVid: output.data[0],
        currentVidComments: output.data[0].comments
      }, console.log('output.data',output.data))        //удалить не забудь! 
    })
  }
     
  componentDidUpdate(prevProps){

      // make a condition to say that if the video Id is defined 
      
  if (this.props.match.params.currentVidId && prevProps.match.params.currentVidId !== this.props.match.params.currentVidId){
    console.log('A new video has been clicked==> ', this.props)
    axios
    .get(`${API_URLS}/videos/${this.props.match.params.currentVidId}`)
    .then(output => {
        this.setState({
          currentVidId: output.data[0].id,
          currentVid: output.data[0],
          currentVidComments: output.data[0].comments
        })
    })
  }

  if (!this.props.match.params.currentVidId){
    axios
    .get(`${API_URLS}/videos/1af0jruup5gu`)
    .then(output => { 
        this.setState({
          currentVidId: output.data[0].id,
          currentVid: output.data[0],
          currentVidComments: output.data[0].comments
        })
    })
  }
}

// handleVidPublish = vidToSubmit => {
//   console.log('vidToSubmit', vidToSubmit);
  
//   axios
//   .post(`${API_URLS}/videos/new`, vidToSubmit)
//   .then(response => console.log('New Vid: ', response.data));
// }

  render() {

    let restListOfVid = this.state.listOfVid.filter(vid => vid.id != this.state.currentVidId)
    return (
      <div>
        <Header />
        <CurrentVid currentVid={this.state.currentVid} />
        <section className="main-part__flex">
          <div>
            <CurrentVidInfo currentVidInfo={this.state.currentVid} />
            <CommentInput />
            <div className="comment-body">
              <Comments comments={this.state.currentVidComments}/>  
            </div>
          </div>
          <aside className="vid-list__body">
            <div className="vid-list__header">NEXT VIDEO</div>
            <VidList listOfVid={restListOfVid}/>
          </aside>
        </section>
      </div> 
    )
  } 
}

export default HomePage;