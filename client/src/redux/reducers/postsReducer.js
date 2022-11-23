import {
  ADD_POST, DELETE_POST, SET_POSTS, UPDATE_POST,
} from '../types';

export default function postsReducer(state = [], action) {
  const { type, payload } = action;
  switch (type) {
    case SET_POSTS:
      return payload; // payload === allPosts
    case ADD_POST:
      return [payload, ...state]; // payload === newPost
    case DELETE_POST:
      return state.filter((post) => post.id !== payload); // payload === id
    case UPDATE_POST:
      return state.map((post) => (post.id === payload.id ? payload : post)); // payload  updatedPost
    default:
      return state;
  }
}
