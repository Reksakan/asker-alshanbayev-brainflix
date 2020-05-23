import React from 'react';
import './App.scss';
import { BrowserRouter, Route, Switch } from 'react-router-dom'; 
import HomePage from './pages/HomePage.js';
import UploadPage from './components/UploadPage';


class App extends React.Component {
  render () {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/home" component={HomePage} />
          <Route path="/:currentVidId" component={HomePage} />
          <Route path="/upload" component={UploadPage} />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App;