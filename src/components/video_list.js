import React, { Component } from 'react';
import VideoListItem from './video_list_item';
import { connect } from 'react-redux';
import * as selectActions from 'actions/selectActions';
import { bindActionCreators } from 'redux';

 class VideoList extends Component {

	render(){
		//console.log(this.props);
		const { videos, isLoading, selectActions } = this.props;
		const videoItems = videos.map((video) => {
		return (
			<VideoListItem
			key={video.etag}
			video={video}
			onUserSelected={selectActions.selectVideo}
			/>
		);
	});
		return (
			<div>
				{isLoading ? <h1>Searching Vidoes ...</h1>: (
				<ul className="col-md-4 list-group">
					{videoItems}
				</ul>)}
			</div>
		);
	}
};

const mapStateToProps = state => ({
  videos: state.youtube.videos,
  isLoading: state.youtube.isLoading,
});

const mapDispatchToProps = dispatch => ({
	selectActions: bindActionCreators(selectActions, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(VideoList);