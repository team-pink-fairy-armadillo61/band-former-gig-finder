import React, { useState } from 'react';
import '../../styles/stylesheet.scss';


const FeedPosts = props => {

  // test post
  const post = {
    title: 'Need Wedding quartet',
    dates: 'Jan 4-6, 2024',
    description: 'Hiring a string quartet for a wedding. Performers would be playing during the cocktail hour for 90 minutes and the pay will be $300 per person. Bring music stands but refreshments and parking will be provided for musicians.'
  };

  // is this here or just in feed??
  // const [post, setPost] = useState(post);

  return (
    <div className='feed-posts'>

      <h4 className='post-title'>{ post.title }</h4><br />
      <span className='post-date'>{ post.dates }</span><br />
      <p>{ post.description }</p>

      {/* button here to message owner of post */}

    </div>
  );
};



export default FeedPosts;
