/* eslint-disable react/jsx-key */
import React, { Fragment, useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
// eslint-disable-next-line import/no-named-as-default
import userContext from '../App';

const Header = () => {
  const { state, dispatch } = useContext(userContext);
  const history = useHistory();

  const renderList = () => {
    if (state) {
      return [
        <li>
          <Link key={1} to='/posts'>
            Posts
          </Link>
        </li>,
        <li>
          <Link to='/createpost'>Create Post</Link>
        </li>,
        <li
          onClick={() => {
            localStorage.clear();
            dispatch({ type: 'CLEAR' });
            history.push('/signin');
          }}
        >
          <a href='#'>Logout</a>
        </li>,
      ];
    } else {
      return [
        <li>
          <Link to='/signin'>Signin</Link>
        </li>,
        <li>
          <Link to='/signup'>Signup</Link>
        </li>,
      ];
    }
  };

  return (
    <nav>
      <div className='nav-wrapper'>
        <Link to={state ? '/' : '/signin'} className='brand-logo left'>
          TechPost
        </Link>
        <ul id='nav-mobile' className='right'>
          {renderList()}
        </ul>
      </div>
    </nav>
  );
};

export default Header;
