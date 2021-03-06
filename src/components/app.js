import React from 'react';
import '../style.scss';
import {
  BrowserRouter, Routes, Route, NavLink,
} from 'react-router-dom';
import Post from './post';
import Posts from './posts';
import NewPost from './newPost';

function App(props) {
  return (
    <BrowserRouter>
      <div>
        <Nav />
        <Routes>
          <Route path="/" element={<Posts />} />
          <Route path="/posts/new" element={<NewPost />} />
          <Route path="/posts/:postID" element={<Post />} />
          <Route render={() => (<div>post not found </div>)} />
        </Routes>

      </div>
    </BrowserRouter>
  );
}

function Nav(props) {
  return (
    <nav>
      <ul className="navLinks">
        <li><NavLink exact to="/"><i className="fa-solid fa-house fa-2xl" /></NavLink></li>
        <li><NavLink to="/posts/new"><i className="fa-solid fa-square-plus fa-2xl" /></NavLink></li>
      </ul>
    </nav>
  );
}

export default App;
