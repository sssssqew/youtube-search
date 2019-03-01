import React, { Component } from 'react';
import SearchBar from './search_bar';
import VideoDetails from './video_detail';
import VideoList from './video_list';

class App extends Component {

  render() {
    return (
      <div>
        <SearchBar />
        <div style={{ "display" : "flex" }}>
           <VideoDetails/>
          <VideoList/>
        </div>
      </div>
    );
  }
}

export default App;
