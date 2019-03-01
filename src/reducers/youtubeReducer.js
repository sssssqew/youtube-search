import * as types from 'actions/actionTypes';

const initialState = {
	videos: [],
	selectedVideo: null,
	isLoading: false,
}

export default function youtubeReducer(state = initialState, action = null){
	switch(action.type){
		case types.SEARCH_VIDEO:
			return {...state, isLoading: true };
		case types.SEARCH_VIDEO_SUCCESS:
			return {...state, isLoading: false, videos: action.data, selectedVideo: action.data[0] };
		case types.SEARCH_VIDEO_FAILED:
			return {...state, isLoading: false, error: action.error };

		case types.SELECT_VIDEO:
			return {...state };
		case types.SELECT_VIDEO_SUCCESS:
			return {...state, selectedVideo: action.data };
		case types.SELECT_VIDEO_FAILED:
			return {...state, error: action.error };

		default:
			return state;
	}
}