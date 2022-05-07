import React, { useState } from 'react';
import { connect } from 'react-redux';
import { createPost, fetchPosts } from '../actions/index';
import withRouter from '../withRouter';

function NewPost(props) {
  const [tags, setTags] = useState('');
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [coverUrl, setCoverUrl] = useState('newPost.jpeg');

  const handleTitle = (event) => {
    setTitle(event.target.value);
  };
  const handleContent = (event) => {
    setContent(event.target.value);
  };
  const handleCoverURL = (event) => {
    setCoverUrl(event.target.value);
  };
  const handleTags = (event) => {
    setTags(event.target.value);
  };

  const handleCreate = async () => {
    if (title.trim().length > 0 && content.trim().length > 0) {
      const fields = {
        title, content, coverUrl, tags,
      };

      console.log(fields);
      await props.createPost(fields, props.navigate);
    }
    setTitle('');
  };

  return (
    <div className="addPost">
      <input className="titleInput addPostComponent" placeholder="Type post title here" onChange={handleTitle} />
      <input className="tagsInput addPostComponent" placeholder="Tags" onChange={handleTags} />
      <input className="contentInput addPostComponent" placeholder="Type post content here" onChange={handleContent} />
      <input className="coverUrlInput addPostComponent" placeholder="Cover Url" onChange={handleCoverURL} />
      <button type="button" className="createBttn " onClick={handleCreate}>CREATE</button>
    </div>

  );
}

// react-redux glue -- outputs Container that know state in props
export default withRouter(connect(null, { createPost, fetchPosts })(NewPost));
