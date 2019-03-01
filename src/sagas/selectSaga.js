import { put, takeLatest, all } from 'redux-saga/effects';
import * as types from 'actions/actionTypes';

function* selectVideo(action){
	try{
		const { selectedVideo } = action;
		console.log(selectedVideo);
		yield put({ type: types.SELECT_VIDEO_SUCCESS, data: selectedVideo });
	}catch(error){
		yield put({ type: types.SELECT_VIDEO_FAILED, error });
	}
}

export function* selectSaga(){
	yield all([
		takeLatest(types.SELECT_VIDEO, selectVideo),
	])
}