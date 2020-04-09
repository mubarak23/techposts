import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
const Header = () => {
  const Links = (
    <ul>
      <li>
        <Link to='/dashboard'>Dashboard</Link>
      </li>
      <li>
        <Link to='/'>Posts</Link>
      </li>

      <li>
        <Link to='/register'>Register</Link>
      </li>
      <li>
        <Link to='/login'>Login</Link>
      </li>
    </ul>
  );

  return (
    <nav className='navbar bg-dark'>
      <h1>
        <Link to='/'>
          <i className='fas fa-code' /> TechPost
        </Link>
      </h1>
      {<Fragment> {Links}</Fragment>}
    </nav>
  );
};

export default Header;
