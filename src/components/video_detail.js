import React, { Component } from 'react';
import { connect } from 'react-redux';

class VideoDetails extends Component {
	render(){
		const { selectedVideo } = this.props;

		 if(!selectedVideo){
		 	return <div>No video yet ! search video ...</div>;
		}
		const videoId = selectedVideo.id.videoId;
	    const videoTitle = selectedVideo.snippet.title;
	    const videoDescription = selectedVideo.snippet.description;
	    const url = `https://www.youtube.com/embed/${videoId}`;

	    return (
			<div className="video-detail col-md-8">
				<div className="embed-responsive embed-responsive-16by9">
					<iframe className="embed-responsive-item" src={url} title={videoTitle}></iframe>
				</div>
				<div className="details">
					<div dangerouslySetInnerHTML={{ __html: videoTitle }}></div>
					<div dangerouslySetInnerHTML={{ __html: videoDescription }}></div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => ({
  selectedVideo: state.youtube.selectedVideo,
});

export default connect(mapStateToProps, null)(VideoDetails);