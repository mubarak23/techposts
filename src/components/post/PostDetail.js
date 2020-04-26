import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import { connect } from 'react-redux';
//import Comment from './Comment';
import { getPost } from '../../redux/actions/postAction';

const Postdetails = ({ post, match }) => {
  useEffect(() => {
    // Your code here
    getPost(match.params.id);
  }, []);
  console.log(match.params.id);

  return (
    <div className='post bg-white p-2 my-6 text-center'>
      <Link to='/login'>
        <p>{match.params.id}</p>
        <p>{post}</p>
      </Link>

      <p>
        Posted on <Moment format='YYYY/MM/DD'></Moment>
      </p>
    </div>
  );
};

Postdetails.propTypes = {
  getPost: PropTypes.func.isRequired,
  post: PropTypes.array.isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  }),
};

const mapStateToProps = (state) => ({
  post: state.post,
});

const mapDispatchToProps = {
  getPost,
};

export default connect(mapStateToProps, mapDispatchToProps)(Postdetails);
