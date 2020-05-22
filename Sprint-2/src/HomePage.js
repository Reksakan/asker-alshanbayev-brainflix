import React from 'react';
import './App.scss';
import Header from './components/Header';
import CurrentVideo from './components/CurrentVideo';
import CurrentVideoDescription from './components/CurrentVideoDescription';
import CommentInput from './components/CommentInput';
import Comments from './components/Comments'
import VideoList from './components/VideoList';
import axios from 'axios';

const api_url = 'https://project-2-api.herokuapp.com/videos/';
const api_key = '5ed7aad8-dec9-446e-9ecc-937573ff8afb';  
const api_link = '?api_key=' + api_key;


class HomePage extends React.Component {
  constructor() {
    super();
  this.state = {
      id: [],
      title: [],
      channel: [], 
      image: [],
      description: [],
      views: [],
      likes: [],
      video: [],
      comments: []
  }}

  componentDidMount() {
    axios
    .get(`${api_url}${api_link}`)
    .then(response =>{
      console.log(response)
      this.setState(response.data[0])
    })
  }
  render() {
    return (
     <div>
        <Header />              
        <p>{this.state.title}</p>
        <p>{this.state.image}</p>
      </div> 
    )
  } 
}

export default HomePage;