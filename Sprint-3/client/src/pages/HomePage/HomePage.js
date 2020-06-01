import React from 'react';
import './HomePage.scss';
import Header from '../../pages/HomePage/components/Header';
import CurrentVid from '../../pages/HomePage/components/CurrentVid';
import CurrentVidInfo from '../../pages/HomePage/components/CurrentVidInfo';
import CommentInput from '../../pages/HomePage/components/CommentInput';
import Comments from '../../pages/HomePage/components/Comments'
import VidList from '../../pages/HomePage/components/VidList';
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
    .catch((error) =>{
      console.log(error);
    })  
    
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
    .catch((error) =>{
      console.log(error);
    })
  }
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