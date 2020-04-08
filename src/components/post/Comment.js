import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
//import { connect } from 'react-redux';
//import { deleteComment } from '../../actions/post';
import CommentForm from './CommentForm';
import Moment from 'react-moment';

const Comment = ({ _id, name, user, text, date, postId }) => {
  return (
    <div className='post bg-white p-1 my-1'>
      <div>
        <Link to={`/profile/${user}`}>
          <img className='round-img' src={user} alt='' />
          <h4>{name}</h4>
        </Link>
      </div>
      <div>
        <p className='my-1'>{text}</p>
        <p className='post-date'>
          Posted on <Moment format='YYYY/MM/DD'>{date}</Moment>
        </p>
      </div>
      <CommentForm postId={postId} />
    </div>
  );
};

export default Comment;
