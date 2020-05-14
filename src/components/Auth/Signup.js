import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import './../App.css';

const Signup = () => {
  const history = useHistory();
  const [username, SetUsername] = useState('');
  const [email, Setemail] = useState('');
  const [password, SetPassword] = useState('');

  //make post request
  const postSignup = () => {
    fetch('/signup', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username,
        email,
        password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        history.push('/signin');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className='my-card'>
      <div className='card auth-card'>
        <h3>Techpost Signup</h3>
        <input
          type='text'
          placeholder='Username'
          value={username}
          onChange={(e) => SetUsername(e.target.value)}
        />
        <input
          type='text'
          placeholder='Email Address'
          value={email}
          onChange={(e) => Setemail(e.target.value)}
        />
        <input
          type='password'
          placeholder='Enter a Unique Password'
          value={password}
          onChange={(e) => SetPassword(e.target.value)}
        />
        <button
          className='btn waves-effect 
          waves-light #64b5f6 blue darken-1'
          onClick={() =>postSignup()}
        >
          Signup
        </button>
        <hr />
        <h5>
          <Link to='/signin'>Have An Already Signin</Link>
        </h5>
      </div>
    </div>
  );
};

export default Signup;
