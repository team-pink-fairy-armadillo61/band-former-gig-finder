import React, { useState } from 'react';
import '../../styles/stylesheet.scss';


const FeedPosts = props => {

  // test post
  const post = {
    title: 'Title',
    dates: 'Jan 4-6, 2024',
    description: 'here are some words here for lots of new stuff'
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
