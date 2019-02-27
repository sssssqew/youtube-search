import React, { Component } from 'react';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';
import VideoDetails from './components/video_detail';

const API_KEY = 'AIzaSyAKHUVkCLJ_AatB1R1dzftgh9LFknGG6xM';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      videos: [],
      selectedVideo: null
    };
    this.videoSearch('');
  }

  videoSearch(term){
    YTSearch({ key: API_KEY, term: term }, (data) => {
      console.log(data);
      this.setState({
        videos: data,
        selectedVideo: data[0]
      });
    });
  }

  render() {
    return (
      <div>
        <SearchBar onSearchTermChange={searchTerm=> this.videoSearch(searchTerm)}/> {/* callback */}
        <div style={{ "display" : "flex" }}>
           <VideoDetails video={this.state.selectedVideo}/>
          <VideoList
          onVideoSelect={userSelected => this.setState({ selectedVideo: userSelected})} // callback
          videos={this.state.videos}/>
        </div>
      </div>
    );
  }
}

export default App;
