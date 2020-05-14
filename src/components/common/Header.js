import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav>
      <div className='nav-wrapper'>
        <Link to='/' className='brand-logo left'>
          TechPost
        </Link>
        <ul id='nav-mobile' className='right'>
          <li>
            <Link to='/signin'>Signin</Link>
          </li>
          <li>
            <Link to='/signup'>Signup</Link>
          </li>
          <li>
            <Link to='/posts'>Posts</Link>
          </li>
          <li>
            <Link to='/createpost'>Create Post</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
