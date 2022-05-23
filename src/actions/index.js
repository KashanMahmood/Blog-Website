import axios from 'axios';

const ROOT_URL = 'https://platform-rest-api-kashanm.onrender.com/api';
// const ROOT_URL = 'http://localhost:9090/api';
const API_KEY = '?key=k_mahmood';

export const ActionTypes = {
  FETCH_POSTS: 'FETCH_POSTS',
  FETCH_POST: 'FETCH_POST',
  UPDATE_POST: 'UPDATE_POST',
  CREATE_POST: 'CREATE_POST',
  DELETE_POST: 'DELETE_POST',
  AUTH_USER: 'AUTH_USER',
  DEAUTH_USER: 'DEAUTH_USER',
  AUTH_ERROR: 'AUTH_ERROR',

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
    axios.post(`${ROOT_URL}/posts`, post, { headers: { authorization: localStorage.getItem('token') } })
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
    axios.delete(`${ROOT_URL}/posts/${postID}${API_KEY}`, { headers: { authorization: localStorage.getItem('token') } })
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
    axios.put(`${ROOT_URL}/posts/${postID}${API_KEY}`, updateContent, { headers: { authorization: localStorage.getItem('token') } })
      .then((response) => {
        dispatch({ type: ActionTypes.UPDATE_POST, payload: response.data });
      }).catch((error) => {
        console.log(error);
      });
  };
}

// trigger to deauth if there is error
// can also use in your error reducer if you have one to display an error message
export function authError(error) {
  return {
    type: ActionTypes.AUTH_ERROR,
    message: error,
  };
}
export function signinUser({ email, password }, navigate) {
  // takes in an object with email and password (minimal user object)
  // returns a thunk method that takes dispatch as an argument (just like our create post method really)
  // does an axios.post on the /signin endpoint and passes in { email, password}
  // on success does:
  //  dispatch({ type: ActionTypes.AUTH_USER });
  //  localStorage.setItem('token', response.data.token);
  // on error should dispatch(authError(`Sign In Failed: ${error.response.data}`));
  return async (dispatch) => {
    axios.post(`${ROOT_URL}/signin`, { email, password })
      .then((response) => {
        dispatch({ type: ActionTypes.AUTH_USER });
        localStorage.setItem('token', response.data.token);
        navigate('/');
      })
      .catch((error) => {
        dispatch(authError(`Sign In Failed: ${error.response.data}`));
      });
  };
}

export function signupUser({ email, password, authName }, navigate) {
  // takes in an object with email and password (minimal user object)
  // returns a thunk method that takes dispatch as an argument (just like our create post method really)
  // does an axios.post on the /signup endpoint (only difference from above)
  // on success does:
  //  dispatch({ type: ActionTypes.AUTH_USER });
  //  localStorage.setItem('token', response.data.token);
  // on error should dispatch(authError(`Sign Up Failed: ${error.response.data}`));
  return async (dispatch) => {
    axios.post(`${ROOT_URL}/signup`, { email, password, authName }).then((response) => {
      localStorage.setItem('token', response.data.token);
      dispatch({ type: ActionTypes.AUTH_USER });
      navigate('/');
    })
      .catch((error) => {
        dispatch(authError(`Sign In Failed: ${error.response.data}`));
      });
  };
}

// deletes token from localstorage
// and deauths
export function signoutUser(navigate) {
  return (dispatch) => {
    localStorage.removeItem('token');
    dispatch({ type: ActionTypes.DEAUTH_USER });
    navigate('/');
  };
}
