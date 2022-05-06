import React from 'react';
import { Link } from 'react-router-dom';
// import ReactMarkdown from 'react-markdown';

function PostCard(props) {
  console.log(props.coverUrl);
  return (
    <div className="postContainer">

      <div className="postCard">

        <div className="cover_Url">
          <img src={props.coverUrl} width="200" height="200" alt="" />

        </div>

        <div className="coverTitle">
          {props.title}
        </div>

        <div className="coverTags">
          {props.tags }
        </div>

        <div className="viewPost">
          <Link to={`/posts/${props.id}`}>View Post</Link>
        </div>

      </div>

    </div>
  );
}

export default PostCard;
