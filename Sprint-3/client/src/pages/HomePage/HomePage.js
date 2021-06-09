import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import './HomePage.scss';
import axios from 'axios';
import Header from '../../pages/HomePage/components/Header';
import CurrentVid from '../../pages/HomePage/components/CurrentVid';
import CurrentVidInfo from '../../pages/HomePage/components/CurrentVidInfo';
import CommentInput from '../../pages/HomePage/components/CommentInput';
import Comments from '../../pages/HomePage/components/Comments'
import VidList from '../../pages/HomePage/components/VidList';




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
    
    //when the page reloaded the prev video should be presented.
    axios
    .get(`${API_URLS}/videos/`)
    .then(output => {
      this.setState({
        currentVidId: output.data[0].id,
        currentVid: output.data[0],
        currentVidComments: output.data[0].comments
      })         
    })
    .catch((error) =>{
      console.log(error);
    })
  }

  componentDidUpdate(prevProps){
      
  if (this.props.match.params.currentVidId && prevProps.match.params.currentVidId !== this.props.match.params.currentVidId){
    axios
    .get(`${API_URLS}/videos/${this.props.match.params.currentVidId}`)
    .then(output => {
      console.log('output in componentDidUpdate: ', output.data)
        this.setState({
          currentVidId: output.data[0].id,
          currentVid: output.data[0],
          currentVidComments: output.data[0].comments
        })
    })
    .catch((error) =>{
      console.log(error);
    })
  }
}

addNewComm = (e) => {
  e.preventDefault();
  const id = this.state.currentVid.id;
  const date = new Date();
  const timestamp = date.getTime();
  const comment = {"name" : "Asker", "comment" : e.target.commentText.value, "id" : uuidv4(), "likes" : 0, "timestamp" : timestamp}
  this.submitComment(id, comment);
  e.target.commentText.value='';
}

submitComment = (id, comment) => {
  axios
  .post(`${API_URLS}/videos/${id}`, comment)
  .then(response => {
    let currentVidComments = response.data.filter(vid => {return vid.id === id})    
    console.log('currentVidComments[0].comments: ', currentVidComments[0].comments)
    this.setState({
      currentVidComments: currentVidComments[0].comments
    })
  })
  .catch(error => {window.alert(error)})
}

  render() {
    let restListOfVid = this.state.listOfVid.filter(vid => vid.id != this.state.currentVidId)
    return (
      <div>
        <Header />
        <CurrentVid currentVid={this.state.currentVid} />
        <section className="main-part__flex">
          <div>
            <CurrentVidInfo currentVidInfo={this.state.currentVid} />
            <CommentInput addNewComm={this.addNewComm}/>
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