import React from 'react';
import Header from '../components/Header';
import CurrentVid from '../components/CurrentVid';
import CurrentVidInfo from '../components/CurrentVidInfo';
import CommentInput from '../components/CommentInput';
import Comments from '../components/Comments'
import VidList from '../components/VidList';
import axios from 'axios';
import { typeOf } from 'prismic-reactjs';

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

  componentDidMount() {
    axios
    .get(`${api_url}${api_key}`)
    .then(response => {
      const listOfVid = response.data;
      const currentVidId = response.data[0].id;
      // console.log('List of Vids came from API', listOfVid)
      console.log('Current Vid ID ', currentVidId)
      this.setState({
        // currentVid: listOfVid[0], 
        listOfVid: listOfVid,
        currentVidId: currentVidId
      })
      if(typeof currentVidId != 'undefined'){   
      return axios.get(`${api_url}${this.state.currentVidId}${api_key}`)}  //Thanks Google 🎁 (https://stackoverflow.com/questions/56028997/getting-data-from-one-axios-to-another-in-componentdidmount)
    })
    .then(response => {
      // console.log('Current VID full description', response)
      // console.log('Comments themselves', response.data.comments)
      const currentVid = response.data;
      const currentVidComments = response.data.comments;
      // console.log('First step', currentVid)
      this.setState({
        currentVid: currentVid,
        currentVidComments: currentVidComments
      })
    })
  }

  // componentDidUpdate(prevProps, prevState) {

  // }

  render() {
    return (
      <div>
        <Header />
        <CurrentVid currentVid={this.state.currentVid} />
        <div className="main-part__flex">
          <CurrentVidInfo currentVid={this.state.currentVid} />
          <CommentInput />
          <Comments comments={this.state.currentVidComments}/>  
        </div>
        <aside>
          <div className="video-list__header">NEXT VIDEO</div>
          <VidList listOfVid={this.state.listOfVid}/>
        </aside>
      </div> 
    )
  } 
}

export default HomePage;