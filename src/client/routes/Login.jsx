import React from 'react';
import { Link } from 'react-router-dom';
import { Form } from 'react-router-dom';
import '../styles/stylesheet.scss';


const Login = props => {



  return (
    <div className='wrap-container'>
      <header id='login-title'>Gig Finder</header>

      <div className='inner'>
        <Form method="post">
          <label htmlFor='username'>Username</label><br />
          <input type='username' placeholder='username' name='username' required></input><br />

          <label htmlFor='password'>Password</label><br />
          <input type='password' placeholder='password' name='password' required></input><br />

          <button type='submit'>Login</button>
        </Form>

        <div id='signedup'>
          <Link to='/signup'>Sign up here!</Link>
        </div>
      </div>

    </div>
  );
};



export default Login;
