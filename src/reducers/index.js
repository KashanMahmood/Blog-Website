import { combineReducers } from '@reduxjs/toolkit';
import PostsReducer from './postsReducer';

const rootReducer = combineReducers({
  posts: PostsReducer,

});

export default rootReducer;
