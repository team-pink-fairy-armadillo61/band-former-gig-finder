import React, { useEffect, useState } from 'react';
import FeedPosts from './feed-components/FeedPosts.jsx';
import Sidebar from './feed-components/Sidebar.jsx';
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../slices/userSlice';
import '../styles/stylesheet.scss';

const Feed = props => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  // test data for feed posts:
  const userToken = useSelector(data => data.user.userToken);
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
            navigate('/login');
          }
        })
        .catch(err => {
          dispatch(logout());
          navigate('/login');
        });
    } else {
      navigate('/login');
    }
  },[userToken]);

  const feedPosts = posts.map((el, i) => {
    // console.log(el);
    return <FeedPosts key={ i } />;
  });

  return (
    <div id='feed-wrap-container'>
      <div id='feed-inner'>
        {/* feed items */}
        { feedPosts }
      </div>
      <div id='sidebar'>
        {/* sidebar */}
         <Sidebar />
      </div>

    </div>
  );
};



export default Feed;
