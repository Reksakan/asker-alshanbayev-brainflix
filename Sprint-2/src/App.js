import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'; 
import HomePage from './HomePage';

class App extends React.Component {
  render () {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/home" component={HomePage} />
          {/* <Route path="/video-player-page/:currVideoID" component={HomePage} />
          <Route path="/upload" component={UploadPage} /> */}
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App;