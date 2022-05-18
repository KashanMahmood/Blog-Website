import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import TextareaAutosize from 'react-textarea-autosize';
import ReactMarkdown from 'react-markdown';
import { fetchPost, deletePost, updatePost } from '../actions/index';
import withRouter from '../withRouter';

function Post(props) {
  const { postID } = useParams();

  async function fetchPostWrapper() {
    await props.fetchPost(postID);
  }
  useEffect(
    () => {
      fetchPostWrapper();
    },
    [],
  );

  const [title, setTitle] = useState(props.post.title);
  const [titleEditing, setTitleEditing] = useState(false);
  const [content, setContent] = useState(props.post.content);
  const [contentEditing, setContentEditing] = useState(false);
  const [tags, setTags] = useState(props.post.tags);
  const [tagsEditing, setTagsEditing] = useState(false);

  const handleDeleteClick = () => {
    props.deletePost(postID, props.navigate);
  };

  const handleSaveClick = () => {
    if (titleEditing) {
      setTitleEditing(false);
      props.updatePost(postID, { title });
    }
    if (contentEditing) {
      setContentEditing(false);
      props.updatePost(postID, { content });
    }
    if (tagsEditing) {
      setTagsEditing(false);
      props.updatePost(postID, { tags });
    }
  };

  const handleTitleClick = () => {
    setTitle(props.post.title);
    setTitleEditing(true);
  };
  const handleContentClick = () => {
    setContent(props.post.content);
    setContentEditing(true);
  };
  const handleTagsClick = () => {
    setTags(props.post.tags);
    setTagsEditing(true);
  };

  const handleTitleEdit = (e) => {
    setTitle(e.target.value);
  };

  const handleContentEdit = (e) => {
    setContent(e.target.value);
  };
  const handleTagsEdit = (e) => {
    setTags(e.target.value);
  };

  const renderTitleSection = () => {
    if (titleEditing) {
      return (
        <TextareaAutosize
          onChange={handleTitleEdit}
          value={title}
          className="titleTextBox textArea"
          maxRows={2}
          cacheMeasurements

        />
      );
    } else if (props.post.title) {
      return (<div>{props.post.title}</div>);
    } else {
      return (<div><em>Click to add title</em></div>);
    }
  };
  const renderContentSection = () => {
    if (contentEditing) {
      return (
        <TextareaAutosize
          onChange={handleContentEdit}
          value={content}
          className="contentTextBox textArea"
          maxRows={2}
          cacheMeasurements

        />
      );
    } else if (props.post.content) {
      return (<div><ReactMarkdown>{props.post.content}</ReactMarkdown></div>);
    } else {
      return (<div><em>No content</em></div>);
    }
  };
  const renderTagsSection = () => {
    if (tagsEditing) {
      return (
        <TextareaAutosize
          onChange={handleTagsEdit}
          value={tags}
          className="contentTagsBox textArea"
          maxRows={2}
          cacheMeasurements

        />
      );
    } else if (props.post.tags) {
      return (<div>{props.post.tags}</div>);
    } else {
      return (<div><em> No tags</em></div>);
    }
  };

  return (
    <div>
      <div className="postContainer">
        <div className="post">

          <div className="title postPart">
            <element onClick={handleTitleClick}>{renderTitleSection()}</element>
          </div>
          <div className="tags postPart">
            <div>Tags:</div>
            <element onClick={handleTagsClick}>{renderTagsSection()}</element>
          </div>
          <div className="content postPart">
            <element onClick={handleContentClick}>{renderContentSection()}</element>
          </div>

          <div className="footer postPart">
            { (titleEditing || contentEditing || tagsEditing)
            && <i role="button" id="editBttn" tabIndex={0} styler aria-label="edit" onClick={handleSaveClick} className="fa-solid fa-square-check fa-xl" />}
            <i role="button" id="deleteBttn" tabIndex={0} aria-label="delete" onClick={handleDeleteClick} className="fa-solid fa-trash-can fa-xl" />
          </div>

        </div>

      </div>
    </div>
  );
}

const mapStateToProps = (state) => (
  {
    post: state.posts.current,
  }
);

export default withRouter(connect(mapStateToProps, { fetchPost, deletePost, updatePost })(Post));
