import * as types from './actionTypes';

export function selectVideo(selectedVideo) {
  return { type: types.SELECT_VIDEO, selectedVideo };
}