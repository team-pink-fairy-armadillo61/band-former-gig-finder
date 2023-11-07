import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
// import { createPost } from '';
import { useNavigate } from 'react-router-dom';
import { useLoaderData } from 'react-router-dom';
import { logout, setCredentials } from '../slices/userSlice';

const initialData = {
  name: 'Johnny BeGood',
  userName: 'coolMusicMan05',
  // profilephoto_URL: ,
  instrumentation: ['guitar', 'drum', 'singing'],
  location: 'Los Angeles, CA',
  availability: true,
  email: 'coolmusicman05@gmail.com',
  videoURL: 'https://www.youtube.com/embed/dQw4w9WgXcQ?si=sEplqZQq0T4qaIgt',
  short_bio: 'A cool guy new to the coast looking for people to jam with!',
  // socialmedia_link: '',
};


const Profile = props => {
  const state = useSelector(data => data.user);
  const userToken = state.userToken;
  const userInfo = useLoaderData();
  const [idGood, setIdGood ] = useState(false);

  // pull data from user account to populate profile
  // const userData = useSelector(state => state.userData);
  // console.log('data', data);

  // create post button
  const dispatch = useDispatch();

  // const clicker = () => {
  //   dispatch(createPost(data));
  // };

  // reset userToken to null on logout
  const userLogout = () => {
    dispatch(logout());
  };
  
  const data = useLoaderData();
  console.log('data', data)

  const [userData, setData] = useState(initialData);
  
  return (
    <div className='wrap-container'>
      <div>
        <button id='feedButton'>house icon</button>
      </div>
      <div className='inner'>
        {/* <img src={ props.photo } alt='profile photo' /> */}
        <h1 className='username'>{ userInfo.userName }</h1>
        {/* basic info goes here */}
        <div className='basics'>
          Name: { userInfo.name }<br />
          Location: { userData.location }<br />
          Contact Email: { userData.email }<br />
          Bio: { userData.short_bio }<br />
        </div>
        {/* extra info (instruments, music, etc) goes here */}
        <div className='extra'>
          Instrument: { userInfo.instrumentation.join(', ') }<br />
          Available: { userData.availability }<br />
        </div>
        {/* embedded content + social media? */}
        <div className='embedded-content'>
          Social Media: { userData.socialmedia_link }<br />
          {/* <video src={ userData.videoURL } /> */}
          <iframe width='560' height='315' src={ userData.videoURL } title='YouTube video player' frameBorder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share' allowfullscreen></iframe>
        </div>
        <button id='logout' onClick={ userLogout }>logout</button>
        {/* <button id='make-post' onClick={ clicker }>make post</button> */}
      </div>
    </div>
  );
};


export default Profile;