import React, { Fragment } from 'react';
//import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import { connect } from 'react-redux';
import Comment from './Comment';
import { addLike, removeLike } from '../../actions/post';

const Post = ({
  post: { _id, title, postbody, date, name, avatar, likes, comments }
}) => {
  return (
    <div className='post bg-white p-1 my-1'>
      <div>
        <h3 className='post'>{title}</h3>
        <Link to='/login'>
          <img className='round-img' src={avatar} alt='' />
          <h4>{name}</h4>
        </Link>
      </div>
      <p className='my-1'>{postbody}</p>
      <p className='post-date'>
        Posted on <Moment format='YYYY/MM/DD'>{date}</Moment>
      </p>
      <Fragment>
        <button
          onClick={e => addLike(_id)}
          type='button'
          className='btn btn-light'
        >
          <i className='fas fa-thumbs-up' />{' '}
          <span>{likes.length > 0 && <span>{likes.length}</span>}</span>
        </button>
        <button
          type='button'
          onClick={e => removeLike(_id)}
          className='btn btn-light'
        >
          <i className='fas fa-thumbs-down' />
        </button>
        <Link to={`/post/${_id}`} className='btn btn-primary'>
          Discussion{' '}
          {comments.length > 0 && (
            <span className='comment-count'>{comments.length}</span>
          )}
        </Link>
        <Link to='/posts' className='btn btn-primary'>
          All Posts
        </Link>
        <div className='comments'>
          {comments.map(comment => (
            // eslint-disable-next-line no-unused-expressions
            <Comment key={comment._id} comment={comment} postId={_id} />
          ))}
        </div>
        {comments}
      </Fragment>
    </div>
  );
};

export default connect({ addLike, removeLike })(Post);
