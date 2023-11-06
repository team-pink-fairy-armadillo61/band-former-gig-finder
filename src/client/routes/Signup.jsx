import React,  { useState, useEffect }  from 'react';
import { Link } from 'react-router-dom';
import '../styles/stylesheet.scss';

const Signup = init => {


  return (

    <div className='wrap-container'>
      <header id='login-title'>
        <h2>Get started with a free account</h2>
      </header>

      <div className='inner'>
        <form>
          <label htmlFor='userName'>Username</label><br />
          <input type='text' id='userName' placeholder='user name' required></input><br />

          <label htmlFor='password'>Password</label><br />
          <input type='password' id='password' placeholder='password' required></input><br />

          <label htmlFor='fullname'>Fullname</label><br />
          <input type='text' id='fullname' placeholder='full name'></input><br />

          <label htmlFor='location'>Location</label><br />
          <input type='text' id='location' placeholder='Enter your city'></input><br />

          <label htmlFor='email'>Email</label><br />
          <input type='email' id='email' placeholder='Enter your email'></input><br />

          <label htmlFor='availability'>Availability</label><br />
          <input type='checkbox' id='availability' name='availability'></input><br />

          <label htmlFor='short_bio'>Short Bio</label><br />
          <textarea id='short_bio' placeholder='Enter your short bio here' /><br />

          <label htmlFor='user_role'>UserType
            <select id='user_role' name='user_role'>
              <option value="musician">Musician</option>
              <option value="customer">Customer</option>
            </select>
          </label><br />

          <label htmlFor='socialmedia_link'>Social media link</label><br />
          <input type='text' id='socialmedia_link' placeholder='Enter your link here'></input><br />

          <label htmlFor='video_url'>Profile page video URL</label><br />
          <input type='text' id='video_url' placeholder='Enter embeded link here'></input><br />

          <button type='submit'>Sign Up</button>
        </form>

      </div>

    </div>
  );

};



export default Signup;
