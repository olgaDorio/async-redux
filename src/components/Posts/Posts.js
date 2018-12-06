import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchAllPosts } from '../../actions';

import '@material/react-card/dist/card.css';
import './Posts.css'

import Card, { CardPrimaryContent } from "@material/react-card";

class Posts extends Component {
  componentWillMount() {
    this.props.fetchAllPosts();
  }

  onPostClick = (id) => {
    this.props.history.push(`/posts/${id}`);
  };

  render() {
    const { posts } = this.props;

    return (
      <div className="Posts">
        {
          posts.slice(0, 10).map((post) => (
            <Card key={post.id} onClick={() => this.onPostClick(post.id)}>
              <CardPrimaryContent>
                <h4>{post.title}</h4>
                <div>{post.body} </div>
              </CardPrimaryContent>
            </Card>
          ))
        }
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

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(Posts)
);
