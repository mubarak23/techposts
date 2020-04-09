import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import PostForm from './PostForm';
import { loadPosts, savePost } from '../../redux/actions/postAction';

function ManagePost({ posts, loadPosts, savePost, history, ...props }) {
  const [post, setPost] = useState({ ...props.post });
  const [errors, setError] = useState({});
  useEffect(() => {
    if (posts.length === 0) {
      loadPosts().catch((error) => {
        alert(`Loading course fail ${error}`);
      });
    }
  }, []);

  function handleChange(event) {
    const { name, value } = event.target;
    setPost((prevPost) => ({
      ...prevPost,
      [name]: name === 'authorId' ? parseInt(value, 10) : value,
    }));
  }
  function handleSubmit(event) {
    event.preventDefault();
    console.log(post);
    savePost(post).then(() => {
      history.push('/posts');
    });
  }

  return (
    <div className='text-center'>
      <PostForm
        post={post}
        errors={errors}
        onChange={handleChange}
        onSave={handleSubmit}
      />
    </div>
  );
}

function mapStateToProps(state) {
  return {
    //course: newCourse,
    posts: state.posts,
    //authors: state.authors,
  };
}

const mapDispatchToProps = {
  loadPosts,
  savePost,
};

export default connect(mapStateToProps, mapDispatchToProps)(ManagePost);
