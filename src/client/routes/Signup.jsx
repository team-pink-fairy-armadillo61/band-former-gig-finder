import React,  { useState, useEffect }  from 'react';
import { Link } from 'react-router-dom';
import '../styles/stylesheet.scss';
import { useNavigate } from 'react-router-dom';

const Signup = props => {
  const [username , setUsername] = useState('');
  const [password , setPassword] = useState('');
  const [name , setName] = useState('');
  const navigate = useNavigate();
  const changeUsername = e => {
    setUsername(e.target.value);
  };
  const changePassword = e => {
    setPassword(e.target.value);
  };
  const changeName = e => {
    setName(e.target.value);
  };


  const registerUser = async () => {
    const result = await fetch('/users', {
      method: 'POST',
      headers: {"Content-Type": "application/json",},
      mode: "no-cors",
      body: JSON.stringify({name: name, userName: username, password: password})
    });
    const output = await result.json();
    if (output){
      console.log('result', output)
      localStorage.setItem('ssid', output.token);
      setTimeout(navigate('/'), 2000);
    }

  };

  return (

    <div className='wrap-container'>
      <header id='login-title'>
        <h2>Get started with a free account</h2>
      </header>

      <div className='inner'>
  
          <label htmlFor='userName'>Username</label><br />
          <input type='text' id='userName'  value={username} onChange={changeUsername} required></input><br />

          <label htmlFor='password'>Password</label><br />
          <input type='password' id='password'  value={password} onChange={changePassword} required></input><br />

          <label htmlFor='fullname'>Fullname</label><br />
          <input type='text' id='fullname' value={name} onChange={changeName} ></input><br />
          <button type='submit' onClick={registerUser}>Sign Up</button>


      </div>

    </div>
  );

};



export default Signup;
