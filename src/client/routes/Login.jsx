import React from 'react';
import { Link } from 'react-router-dom';

const Login = props => {



  return (
    <div className='wrap-container'>
      <header id='login-title'>Gig Finder</header>

      <div className='inner'>
        <form>
          <label htmlFor='username'>Username</label><br />
          <input type='text' placeholder='username' required></input><br />

          <label htmlFor='password'>Password</label><br />
          <input type='password' placeholder='password' required></input><br />

          <button type='submit'>Login</button>
        </form>

        <div>
          <Link to='/signup'>Sign up here!</Link>
        </div>
      </div>

    </div>
  );
};



export default Login;
