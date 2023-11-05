import React, { useEffect, useState } from 'react';
import FeedPosts from './feed-components/FeedPosts.jsx';
import Sidebar from './feed-components/Sidebar.jsx';

const Feed = props => {

  // test data for feed posts:
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

  const feedPosts = posts.map((el, i) => {
    // console.log(el);
    return <FeedPosts key={ i } />;
  });
  
  return (
    <div id='feed-wrap-container'>
      <div id='feed-inner'>
        {/* feed items */}
        { feedPosts }
        {/* sidebar */}
        <Sidebar />
      </div>
    </div>
  );
};



export default Feed;