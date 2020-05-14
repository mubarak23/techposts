import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import M from 'materialize-css';
import './../App.css';

const Signin = () => {
  const history = useHistory();
  const [username, SetUsername] = useState();
  const [password, SetPassword] = useState();

  const PostSignin = () => {
    fetch('https://fast-plains-95666.herokuapp.com/api/user', {
      method: 'post',
      headers: {
        'Content-Type': 'Application/json',
      },
      body: {
        username,
        password,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.errors) {
          M.toast({
            html: 'An Error Has Occur Try Again',
            classes: '#c62828 red darken-3',
          });
        } else {
          M.toast({ html: data.message, classes: '#43a047 green darken-1' });
          history.push('/signin');
        }
      })
      .catch((errors) => {
        console.log(errors);
      });
  };

  return (
    <div className='my-card'>
      <div className='card auth-card'>
        <h3>Techpost Signin</h3>
        <input
          type='text'
          value={username}
          onChange={(e) => SetUsername(e.target.value)}
          placeholder='Username'
        />
        <input
          type='password'
          value={password}
          onChange={(e) => SetPassword(e.target.value)}
          placeholder='Enter Your Password'
        />
        <button
          onClick={() => PostSignin()}
          className='btn waves-effect
         waves-light #64b5f6 blue darken-1'
        >
          Signin
        </button>
        <hr />
        <h5>
          <Link to='/signup'>Dont Have An Account SignUp</Link>
        </h5>
      </div>
    </div>
  );
};

export default Signin;
