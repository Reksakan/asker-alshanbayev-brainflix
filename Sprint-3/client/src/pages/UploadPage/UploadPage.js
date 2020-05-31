import React from 'react';
import Header from '../HomePage/components/Header';
import UploadingVidInfo from './components/UploadingVidInfo' 
import { Link } from 'react-router-dom';

class UploadPage extends React.Component {
  render() {
    return (
      <>  
        <Header />
        <UploadingVidInfo />
      </>  
    )
  }
}

export default UploadPage;