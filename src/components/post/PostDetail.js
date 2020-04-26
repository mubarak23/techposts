import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link, useParams } from 'react-router-dom';
import Moment from 'react-moment';
//import { connect } from 'react-redux';
import Comment from './Comment';
import { getPost } from '../../redux/actions/postAction';

const Postdetails = ({ post, match }) => {
  useEffect(() => {
    getPost(match.params.id);
  }, []);
  return (
    <div className='post bg-white p-2 my-6 text-center'>
      <Link to='/login'>
        <p>{match.params.id}</p>
      </Link>

      <p>
        Posted on <Moment format='YYYY/MM/DD'></Moment>
      </p>
    </div>
  );
};

Postdetails.propTypes = {
  //posts: PropTypes.array.isRequired,
};

const mapDispatchToProps = {
  getPost,
};

export default Postdetails;
