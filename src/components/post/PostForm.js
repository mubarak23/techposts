import React from 'react';
import PropTypes from 'prop-types';
import TextInput from '../common/TextInput';
//import AeaInput from '../common/AreaInput';
import AreaInput from '../common/AreaInput';

const PostForm = ({ post, onSave, onChange, saving = false, errors = {} }) => {
  return (
    <form onSubmit={onSave}>
      <h2>{post.id ? 'Edit' : 'Add'} Course</h2>
      {errors.onSave && (
        <div className='alert alert-danger' role='alert'>
          {errors.onSave}
        </div>
      )}
      <TextInput
        name='title'
        label='Title'
        value={post.title}
        onChange={onChange}
        error={errors.title}
      />
      <TextInput
        name='name'
        label='Name'
        value={post.name}
        onChange={onChange}
        error={errors.name}
      />
      <TextInput
        name='user_id'
        label='User Id'
        value={post.user_id}
        onChange={onChange}
        error={errors.user_id}
      />
      <AreaInput
        name='postbody'
        label='Post Body'
        value={post.postbody}
        onChange={onChange}
        error={errors.postbody}
      />
      <button type='submit' disabled={saving} className='btn btn-primary'>
        {saving ? 'Saving...' : 'Save'}
      </button>
    </form>
  );
};

PostForm.propTypes = {
  post: PropTypes.object.isRequired,
  errors: PropTypes.object,
  onSave: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  saving: PropTypes.bool,
};

export default PostForm;
