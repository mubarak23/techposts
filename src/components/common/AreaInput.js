import React from 'react';
import PropTypes from 'prop-types';

const AreaInput = ({ name, label, onChange, placeholder, value, error }) => {
  let wrapperClass = 'form-group';
  if (error && error.length > 0) {
    wrapperClass += '' + 'has-error';
  }

  return (
    <div className={wrapperClass}>
      <label htmlFor={name}>{label}</label>
      <div className='field'>
        <textarea
          cols='30'
          rows='5'
          name={name}
          className='form-control'
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
        {error && <div className='alert alert-danger'>{error}</div>}
      </div>
    </div>
  );
};

AreaInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  error: PropTypes.string,
};

export default AreaInput;
