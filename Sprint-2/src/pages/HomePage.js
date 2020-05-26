import React from 'react';
import './HomePage.scss';
import Header from '../components/Header';
import CurrentVid from '../components/CurrentVid';
import CurrentVidInfo from '../components/CurrentVidInfo';
import CommentInput from '../components/CommentInput';
import Comments from '../components/Comments'
import VidList from '../components/VidList';
import axios from 'axios';


const api_url = 'https://project-2-api.herokuapp.com/videos/';
const api_key = '?api_key=5ed7aad8-dec9-446e-9ecc-937573ff8afb';  

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
    .get(`${api_url}${api_key}`)
    .then(response => {
      this.setState ({
        listOfVid: response.data
      })
      //Maybe here put if (!this.props.match.params.currentVidId) {} 
      console.log('Look at current link:', this.props.match)          //Console should be deleted before submission
      if(!this.props.match.params.currentVidId) {
        axios
        .get(`${api_url}${response.data[0].id}${api_key}`)
        .then(output => {
          console.log('Current vid full description***: ', output)    //Console should be deleted before submission
          this.setState({
            currentVidId: output.data.id,
            currentVid: output.data,
            currentVidComments: output.data.comments
          })
        })
      } else {
        axios
        .get(`${api_url}${this.props.match.params.currentVidId}${api_key}`)
        .then(outcome => {
          this.setState({
            /* currentVidId: outcome.data.id, */
            currentVid: outcome.data,
            currentVidComments: outcome.data.comments
          })
        })
      }
    })
  }

  componentDidUpdate(prevProps) {
    
    console.log('PrevProps params ID', prevProps.match.params.currentVidId);        //Console should be deleted before submission
    console.log('CurrentProps params ID', this.props.match.params.currentVidId);    //Console should be deleted before submission
          
    if (prevProps.match.params.currentVidId !== this.props.match.params.currentVidId) {
      console.log('!!!Success is near here!!!')                                         //Console should be deleted before submission
      axios
      .get(`${api_url}${this.props.match.params.currentVidId}${api_key}`)
      .then(response => {
        this.setState({
          currentVidId: response.data.id,
          currentVid: response.data,
          currentVidComments: response.data.comments
        })
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