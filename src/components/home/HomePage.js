import React from 'react';
import { Link } from 'react-router-dom';
const Home = () => {
  return (
    <section className='landing'>
      <div className='dark-overlay'>
        <div className='landing-inner'>
          <h1 className='x-large'>TechPost</h1>
          <p className='lead'>
            Create and share posts about Technologies and get help from other
            developers
          </p>
          <div className='button'>
            <Link to='/'>Submit Article</Link>
            <Link to='/'>Contact Us</Link>
          </div>
        </div>
      </div>
      
    </section>
  );
};

export default Home;
