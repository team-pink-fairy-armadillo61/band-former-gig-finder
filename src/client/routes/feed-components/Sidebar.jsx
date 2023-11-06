import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import { useSelector, useDispatch } from "react-redux";
// import { createPost } from '';

const Sidebar = props => {

  const user = {
    name: 'Johnny BeGood',
    userName: 'coolMusicMan05'
  };

  // create post button
  // const dispatch = useDispatch();

  // const clicker = () => {
  //   dispatch(createPost(data));
  // };

  return (
    <div >
      {/* profile photo goes here if stretch hits */}
      <h2 className='sidebar-username'>{ user.userName }</h2>
      <h4 className='sidebar-name'>{ user.name }</h4>
      <Link to='/user/:userID'>profile</Link>
      {/* <button id='make-post' onClick={ clicker }>make post</button> */}
    </div>
  );
};



export default Sidebar;
