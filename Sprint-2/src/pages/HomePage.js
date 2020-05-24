import React from 'react';
import Header from '../components/Header';
import CurrentVid from '../components/CurrentVid';
import CurrentVidInfo from '../components/CurrentVidInfo';
import CommentInput from '../components/CommentInput';
import Comments from '../components/Comments'
import VidList from '../components/VidList';
import axios from 'axios';


const api_url = 'https://project-2-api.herokuapp.com/videos/';
const api_key = '?api_key=5ed7aad8-dec9-446e-9ecc-937573ff8afb';  

//All Vids ID: '1af0jruup5gu', '1ainjruutd1j'

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
      console.log('Look at current link:', this.props.match)          //Delete before submission
      if(!this.props.match.params.currentVidId) {
        axios
        .get(`${api_url}${response.data[0].id}${api_key}`)
        .then(output => {
          console.log('Current vid full description***: ', output)
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
            currentVidId: outcome.data.id,
            currentVid: outcome.data,
            currentVidComments: outcome.data.comments
          })
        })
      }
    })
  }

  componentDidUpdate(prevProps) {
    
    console.log('PrevProps params ID', prevProps.match.params.currentVidId);
    console.log('CurrentProps params ID', this.props.match.params.currentVidId);
          
    if (prevProps.match.params.currentVidId !== this.props.match.params.currentVidId) {
      console.log('!!!Success is near here!!!')
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
        <div className="main-part__flex">
          <CurrentVidInfo currentVidInfo={this.state.currentVid} />
          <CommentInput />
          <Comments comments={this.state.currentVidComments}/>  
        </div>
        <aside>
          <div className="video-list__header">NEXT VIDEO</div>
          <VidList listOfVid={restListOfVid}/>
        </aside>
      </div> 
    )
  } 
}

export default HomePage;