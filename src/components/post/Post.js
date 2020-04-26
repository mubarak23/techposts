import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
//import { connect } from 'react-redux';
import Comment from './Comment';
//import { addLike, removeLike } from '../../actions/post';

const Post = ({ posts }) =>
  posts.map((post) => {
    return (
      <div key={post._id} className='post bg-white p-1 my-1 text-center'>
        <Link to='/login'>
          <p>{post.title}</p>
        </Link>
        <Link to={'/postDetail/' + post._id}>
          <p>Read More</p>
        </Link>

        <p>
          Posted on <Moment format='YYYY/MM/DD'>{post.date}</Moment>
        </p>
      </div>
    );
  });

Post.propTypes = {
  posts: PropTypes.array.isRequired,
};

export default Post;
