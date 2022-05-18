import axios from 'axios';

const ROOT_URL = 'https://platform-rest-api-kashanm.onrender.com/api';
const API_KEY = '?key=k_mahmood';

export const ActionTypes = {
  FETCH_POSTS: 'FETCH_POSTS',
  FETCH_POST: 'FETCH_POST',
  UPDATE_POST: 'UPDATE_POST',
  CREATE_POST: 'CREATE_POST',
  DELETE_POST: 'DELETE_POST',

};

export function fetchPosts() {
  return (dispatch) => {
    axios.get(`${ROOT_URL}/posts${API_KEY}`)
      .then((response) => {
        dispatch({ type: ActionTypes.FETCH_POSTS, payload: response.data });
      }).catch((error) => {
        console.log(error);
      });
  };
}

// export function createPost(post, navigate) {
export function createPost(post, navigate) {
  return (dispatch) => {
    axios.post(`${ROOT_URL}/posts${API_KEY}`, post)
      .then((response) => {
        dispatch({ type: ActionTypes.CREATE_POST, payload: response.data });
        navigate('/');
      }).catch((error) => {
        console.log(error);
      });
  };
}

export function fetchPost(postID) {
  return (dispatch) => {
    axios.get(`${ROOT_URL}/posts/${postID}${API_KEY}`)
      .then((response) => {
        dispatch({ type: ActionTypes.FETCH_POST, payload: response.data });
      }).catch((error) => {
        console.log(error);
      });
  };
}

export function deletePost(postID, navigate) {
  return (dispatch) => {
    axios.delete(`${ROOT_URL}/posts/${postID}${API_KEY}`)
      .then((response) => {
        dispatch({ type: ActionTypes.DELETE_POST, payload: response.data });
        navigate('/');
      }).catch((error) => {
        console.log(error);
      });
  };
}

export function updatePost(postID, updateContent) {
  return (dispatch) => {
    axios.put(`${ROOT_URL}/posts/${postID}${API_KEY}`, updateContent)
      .then((response) => {
        dispatch({ type: ActionTypes.UPDATE_POST, payload: response.data });
      }).catch((error) => {
        console.log(error);
      });
  };
}
