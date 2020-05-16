import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header'
import CurrentVideo from './components/Currentvideo/CurrentVideo'


class App extends React.Component {
  render() {
    return (
      <div>
        <Header />              {/* contains Logo + textInputArea & UploadButton + Avatar */}
        <CurrentVideo />        {/* Hero space, where current video will be played */}
      
    </div>
    ) 
}}

export default App;