import { combineReducers } from '@reduxjs/toolkit';
import PostsReducer from './postsReducer';
import AuthReducer from './auth-reducer';

const rootReducer = combineReducers({
  posts: PostsReducer,
  auth: AuthReducer,

});

export default rootReducer;
