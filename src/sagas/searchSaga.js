import { call, put, takeLatest, all } from 'redux-saga/effects';
import * as types from 'actions/actionTypes';
import YTSearch from 'youtube-api-search';

let getYoutubeVideo = (key, term) => {
	return new Promise(
		resolve => {
			YTSearch({ key: key, term: term }, (data) => {
		     	resolve(data);
		    })
		}
	)
}

function* searchVideo(action){
	try{
		const { keyword } = action;
		//console.log(keyword);
		console.log(process.env.REACT_APP_API_KEY);

		const data = yield call(getYoutubeVideo, process.env.REACT_APP_API_KEY, keyword);
		yield put({ type: types.SEARCH_VIDEO_SUCCESS, data: data });
	}catch(error){
		yield put({ type: types.SEARCH_VIDEO_FAILED, error });
	}
}

export function* searchSaga(){
	yield all([
		takeLatest(types.SEARCH_VIDEO, searchVideo),
	])
}