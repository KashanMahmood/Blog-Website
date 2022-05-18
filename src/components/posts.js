import React, { Component } from 'react';
import { connect } from 'react-redux';
import PostCard from './postCard';
import { fetchPosts } from '../actions/index';

class Posts extends Component {
  async componentDidMount() {
    await this.props.fetchPosts();
  }

  makePosts = () => {
    console.log(this.props.all);
    const posts = Object.keys(this.props.all).map((id) => {
      console.log(id);
      return (

        <PostCard key={this.props.all[id].id.toString()}
          title={this.props.all[id].title}
          tags={this.props.all[id].tags}
          id={this.props.all[id].id}
          coverUrl={this.props.all[id].coverUrl}
        />
      );
    });
    return posts;
  };

  render() {
    return (
      <div className="postsList">
        {this.makePosts()}
      </div>
    );
  }
}
// connects particular parts of redux state to this components props
const mapStateToProps = (state) => (
  {
    all: state.posts.all,
  }
);

// react-redux glue -- outputs Container that know state in props
export default connect(mapStateToProps, { fetchPosts })(Posts);
