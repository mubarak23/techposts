import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import './../App.css';

const Signup = () => {
  const history = useHistory();
  const [username, SetUsername] = useState();
  const [email, Setemail] = useState();
  const [password, SetPassword] = useState();

  return (
    <div className='my-card'>
      <div className='card auth-card'>
        <h3>Techpost Signup</h3>
        <input type='text' placeholder='Username' />
        <input type='text' placeholder='Email Address' />
        <input type='password' placeholder='Enter a Unique Password' />
        <button className='btn waves-effect waves-light #64b5f6 blue darken-1' />
      </div>
    </div>
  );
};
