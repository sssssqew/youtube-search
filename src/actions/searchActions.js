import * as types from './actionTypes';

export function searchVideo(keyword) {
  return { type: types.SEARCH_VIDEO, keyword };
}