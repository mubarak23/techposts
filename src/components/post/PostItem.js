import React, { Fragment } from 'react';
import Moment from 'moment';
import { connect } from 'react-redux';

const PostItem = ({ postdata }) => {
  const postList = postdata.map(post => (
    <tr key={post._id}>
      <td>{post.title}</td>
      <td>
        <Moment format='YYYY/MM/DD'>{post.date}</Moment>
      </td>
      <td>
        <button className='btn btn-danger'>Delete Post</button>
      </td>
    </tr>
  ));
  return (
    <Fragment>
      <h2>List of Available Post Article</h2>
      <table className='table'>
        <thead>
          <tr>
            <th>Title</th>
            <th className='hide-sm'>Date</th>
            <th className='hide-sm'>Action</th>
          </tr>
        </thead>
        <tbody>{postList}</tbody>
      </table>
    </Fragment>
  );
};

export default PostItem;
