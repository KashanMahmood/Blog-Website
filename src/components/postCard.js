import React from 'react';
import { Link } from 'react-router-dom';

function PostCard(props) {
  const renderPostURL = () => {
    if (!props.coverUrl || props.coverUrl.trim().length < 1) {
      return ('');
    }
    return (<img src={props.coverUrl} width="200" height="200" alt="" />);
  };

  return (

    <div className="postCard">

      <div className="cover_Url">
        {renderPostURL()}

      </div>

      <div className="coverTitle">
        {props.title}
      </div>

      <div className="coverTags">
        {props.tags }
      </div>

      <div className="viewPost">
        <Link to={`/posts/${props.id}`}><i className="fa-solid fa-angle-right" /></Link>
      </div>

    </div>

  );
}

export default PostCard;
