import React from 'react';

const VideoListItem = (props) => {
	const video = props.video;
	//console.log(video);
	const imageUrl = video.snippet.thumbnails.default.url;

	return (
		<li  className="list-group-item" onClick={() => props.onUserSelected(video)} >
			<div className="video-list media">
				<div className="media-left">
					<img className="media-object" src={imageUrl} alt={video.snippet.title}/>
				</div>
				<div className="media-body">
					<div className="media-heading" dangerouslySetInnerHTML={{ __html: video.snippet.title }}></div>
				</div>
			</div>
		</li>
	);
};

export default VideoListItem;
