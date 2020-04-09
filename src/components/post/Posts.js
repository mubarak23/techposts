import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
//import CourseList from './CourseList';
import Post from './Post';
import { bindActionCreators } from 'redux';
import * as postAction from '../../redux/actions/postAction';
//import * as authorAction from '../../redux/actions/authorAction';

class Posts extends Component {
  componentDidMount() {
    const { posts, actions } = this.props;
    console.log(posts);
    if (posts.length === 0) {
      actions.loadPosts().catch((error) => {
        alert(`Loading course fail ${error}`);
      });
    }
  }
  render() {
    return (
      <div className='text-center'>
        <h2>Posts</h2>
        <Post posts={this.props.posts} />
      </div>
    );
  }
}

Posts.propTypes = {
  posts: PropTypes.array.isRequired,
  authors: PropTypes.array.isRequired,
  //courses: PropTypes.array.isRequired,
  //createCourse: PropTypes.func.isRequired
  actions: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  return {
    posts: state.posts,
    authors: state.authors,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    //createCourse: course => dispatch(courseAction.createCourse(course))
    //createCourse: bindActionCreators(courseAction, dispatch)
    //actions: bindActionCreators(courseAction, dispatch),
    actions: {
      loadPosts: bindActionCreators(postAction.loadPosts, dispatch),
      //loadAuthors: bindActionCreators(authorAction.loadAuthors, dispatch),
    },
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Posts);
