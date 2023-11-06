import React from 'react';
// import { redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';


const Logout = props => {
  
  
  return (
    <div className='wrap-container'>
      <header id='logout-title'>You Are Logged Out!</header>

      <div className='inner'>
        <Link to='/login'>Login</Link>
      </div>

    </div>
  );
};



export default Logout;