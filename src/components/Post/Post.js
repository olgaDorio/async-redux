import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { createPost } from '../../actions';
import { fetchAllPosts } from '../../actions';

class Post extends Component {
  componentWillMount() {
    if (!this.props.posts.length) {
      this.props.fetchAllPosts();
    }
  }

  render() {
    const { postId } = this.props.match.params;
    const post = this.props.posts.find(p => p.id == postId);

    return (
      <div>
        <Link to="/posts">posts</Link>
        {post ? (
          <h1>Post {postId} {post.body}</h1>
        ) : (
          <h1>Post not found</h1>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    posts: state.posts
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchAllPosts: () => {
      dispatch(fetchAllPosts());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Post);
