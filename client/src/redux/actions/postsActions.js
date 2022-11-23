import axios from 'axios';
import { ADD_POST, DELETE_POST, SET_POSTS } from '../types';

export const setPosts = (newPosts) => ({ type: SET_POSTS, payload: newPosts });
export const addPost = (onePost) => ({ type: ADD_POST, payload: onePost });
export const deletePost = (postId) => ({ type: DELETE_POST, payload: postId });

export const getPosts = () => (dispatch) => {
  axios.get('/posts')
    .then((res) => dispatch(setPosts(res.data)))
    .catch(() => dispatch(setPosts([])));
};

export const submitPost = (e, input) => (dispatch) => {
  e.preventDefault();
  axios.post('/posts', { message: input })
    .then((res) => dispatch(addPost(res.data)));
};

export const asyncDelete = (id) => (dispatch) => {
  axios.delete(`/posts/${id}`)
    .then(() => dispatch(deletePost(id)))
    .catch(console.log);
};
