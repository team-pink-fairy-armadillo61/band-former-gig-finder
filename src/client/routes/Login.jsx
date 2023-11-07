import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { userLogin } from '../slices/authActions';
import { logout } from '../slices/userSlice';
import { useDispatch, useSelector} from 'react-redux';
// import inplaceVerify from '../slices/inplaceVerify.js';

import '../styles/stylesheet.scss';


const Login = props => {
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state)=>state.user);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const userToken = useSelector(data => data.user.userToken);
  
  useEffect(() =>{
    const fetchData = async(userToken) => {
      const resp = await fetch('/users/verify', {
        method: "POST",
        headers: {"Content-Type": "application/json",},
        mode: "no-cors",
        body: JSON.stringify({token: userToken})
      });
      const outcome = await resp.json();
      return outcome;
    };
    if (userToken) {
      fetchData(userToken)
        .then(outcome => {
          if (outcome.success) {
            setTimeout(()=>{
              navigate('/');
            },1000);
          } else {
            dispatch(logout());
            navigate(0);
          }
        })
        .catch(err => {
          dispatch(logout());
          navigate(0);
          
        });
    }
  },[userToken]);

  const handleUNChange = e => {
    // console.log(e)
    setUsername(e.target.value);
  };
  const handlePWChange = e => {
    // console.log(e)
    setPassword(e.target.value);
  };

  const submitForm = data => {
    dispatch(userLogin({userName: username, password: password}));
    if (userToken) {
      navigate('/');
    }
  }



  return (
    <div className='wrap-container'>
      <header id='login-title'>Gig Finder</header>

      <div className='inner'>
        
        <label htmlFor='username'>Username</label><br />
        <input type='username' 
          placeholder='username' 
          value={username}
          onChange={handleUNChange}
          name='username' required
        >
        </input><br />

        <label htmlFor='password'>Password</label><br />
        <input type='password' 
          placeholder='password'
          value={password}
          onChange={handlePWChange}
          name='password' required
        >
        </input><br />

        <button type='submit' onClick={submitForm}>Login</button>
        

        <div id='signedup'>
          <Link to='/signup'>Sign up here!</Link>
        </div>
      </div>

    </div>
  );
};



export default Login;
