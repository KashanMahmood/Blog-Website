import React from 'react';
import '../style.scss';
import {
  BrowserRouter, Routes, Route,
} from 'react-router-dom';
import Post from './post';
import Posts from './posts';
import NewPost from './newPost';
import SignIn from './SignIn';
import SignUp from './SignUp';
import RequireAuth from './requireAuth';
import NavBar from './navBar';

function Nav(props) {
  return (
    <nav>
      <NavBar />
    </nav>
  );
}

function App(props) {
  return (
    <BrowserRouter>
      <div>
        <Nav />
        <Routes>
          <Route path="/" element={<Posts />} />
          <Route path="/signIn" element={<SignIn />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/posts/new" element={<RequireAuth> <NewPost /> </RequireAuth>} />
          <Route path="/posts/:postID" element={<Post />} />
          <Route render={() => (<div>post not found </div>)} />
        </Routes>

      </div>
    </BrowserRouter>
  );
}

export default App;
