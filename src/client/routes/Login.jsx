import React from 'react';
import { Link } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import { Form } from 'react-router-dom';

async function action({ request }) {
  const data = await request.formData();
  const resp = await fetch(/*the login endpoint*/'', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: data
  });
  
};

const Login = props => {
  const [cookies, setCookie, removeCookie] = useCookies(['cookie-name']);


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

        <div>
          <Link to='/signup'>Sign up here!</Link>
        </div>
      </div>

    </div>
  );
};



export default Login;
