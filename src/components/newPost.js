import React, { useState } from 'react';
import { connect } from 'react-redux';
import { createPost, fetchPosts } from '../actions/index';
import withRouter from '../withRouter';

function NewPost(props) {
  const [tags, setTags] = useState('');
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [coverUrl, setCoverUrl] = useState('');

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
    <div id="addPost">
      <input id="titleInput" placeholder="Type post title here" onChange={handleTitle} />
      <input id="contentInput" placeholder="Tags" onChange={handleTags} />
      <input id="contentInput" placeholder="Type post content here" onChange={handleContent} />
      <input id="contentInput" placeholder="Cover URL" onChange={handleCoverURL} />
      <button type="button" className="createBttn" onClick={handleCreate}>CREATE</button>
    </div>

  );
}

// react-redux glue -- outputs Container that know state in props
export default withRouter(connect(null, { createPost, fetchPosts })(NewPost));
