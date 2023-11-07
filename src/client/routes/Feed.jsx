import React, { useEffect, useState } from 'react';
import FeedPosts from './feed-components/FeedPosts.jsx';
import Sidebar from './feed-components/Sidebar.jsx';
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { logout, setCredentials } from '../slices/userSlice';

import '../styles/stylesheet.scss';

const Feed = props => {

  const [idGood, setIdGood ] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // test data for feed posts:
  const state = useSelector(data => data.user);
  const userToken = state.userToken;
  const userInfo = state.userInfo;
  const posts = ['Looking for guitarist...', 'Gig Opportunity: Need Bands for Local Festival', 'JAM SESSION THIS SUNDAY!!'];

  // const [posts, updatePosts] = useState([]);

  // useEffect(() => {
  //   fetch('/posts')
  //     .then((resp) => resp.json())
  //     .then((data) => {
  //       // console.log(data);
  //       updatePosts(data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //       console.log('Error fetching data', error);
  //     });
  // }, [posts]);
    // verify user token
  useEffect(() =>{
    const fetchData = async(endPoint, body) => {
      const resp = await fetch(endPoint, body);
      const outcome = await resp.json();
      return outcome;
    };

    if (userToken) {
      
      fetchData('/users/verify', {
        method: "POST",
        headers: {"Content-Type": "application/json",},
        mode: "no-cors",
        body: JSON.stringify({token: userToken})
      })
        .then(outcome => {
          if (outcome.success) {
            console.log('outcome success!')
            setIdGood(true);
            
          } else {
            console.log('failure', outcome)
            dispatch(logout());
            //navigate('/login');
          }
        })
        .catch(err => {
          console.log('err', err)
          dispatch(logout());
          //navigate('/login');
        });
    } else {
      navigate('/login');
    }
  },[userToken]);

  useEffect(()=>{
    const fetchData = async(endPoint, body) => {
      const resp = await fetch(endPoint, body);
      const outcome = await resp.json();
      return outcome;
    };
    console.log('this useffec t')
    fetchData('/users/profile', {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({token: userToken}),
      mode: "no-cors",
    })
    .then(data => {
      console.log('We have user data!');
      dispatch(setCredentials(data))
    })
    .catch(err=> {
      console.log('error', err)
    })
  },[]);

  const feedPosts = posts.map((el, i) => {
    // console.log(el);
    return <FeedPosts key={ i } />;
  });
  console.log(userInfo)
  return (
    <div id='feed-wrap-container'>
      <div id='feed-inner'>
        {/* feed items */}
        { feedPosts }
      </div>
      <div id='sidebar'>
        {/* sidebar */}
         <Sidebar userName={userInfo.userName} name={userInfo.name} userID={userInfo.id} />
      </div>

    </div>
  );
};



export default Feed;
