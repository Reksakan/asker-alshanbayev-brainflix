import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'; 
import HomePage from './pages/HomePage.js';
import UploadPage from './pages/UploadPage.js';


class App extends React.Component {
  render () {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/upload" component={UploadPage} />
          <Route path="/home" component={HomePage} />
          <Route path="/:currentVidId" component={HomePage} />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App;