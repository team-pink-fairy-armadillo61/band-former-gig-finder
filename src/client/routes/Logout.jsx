import React from 'react';
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';


const Logout = props => {
  // check token and if null (user logged out), redirect to login page


  const userToken = useSelector(state => state.userToken);
  const navigate = useNavigate();

  useEffect(() => {
    if (!userToken) {
      setTimeout(() => {
        navigate('/login');
      }, 2500);
    }
  }, [userToken]);
  
  
  return (
    <div className='wrap-container'>
      <header id='logout-title'>You Are Logged Out!</header>

      <div className='signedout'>
        <Link to='/login'>Login</Link>
      </div>

    </div>
  );
};



export default Logout;