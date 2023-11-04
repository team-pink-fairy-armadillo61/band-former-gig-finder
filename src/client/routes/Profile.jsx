import React, { useState } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { createPost } from '';


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

  // pull data from user account to populate profile
  // const userData = useSelector(state => state.userData);
  // console.log('data', data);

  // create post button
  // const dispatch = useDispatch();

  // const clicker = () => {
  //   dispatch(createPost(data));
  // };

  const [userData, setData] = useState(initialData);
  
  return (
    <div className="prof-container">
      <div>
        <button id="feedButton">house icon</button>
      </div>
      <div className="prof-inner">
        {/* <img src={ props.photo } alt="profile photo" /> */}
        <h1 className="username">{ userData.userName }</h1>
        {/* basic info goes here */}
        <div className="basics">
          Name: { userData.name }<br />
          Location: { userData.location }<br />
          Contact Email: { userData.email }<br />
          Bio: { userData.short_bio }<br />
        </div>
        {/* extra info (instruments, music, etc) goes here */}
        <div className="extra">
          Instrument: { userData.instrumentation.join(', ') }<br />
          Available: { userData.availability }<br />
        </div>
        {/* embedded content + social media? */}
        <div className="embedded-content">
          Social Media: { userData.socialmedia_link }<br />
          {/* <video src={ userData.videoURL } /> */}
          <iframe width="560" height="315" src={ userData.videoURL } title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
        <button id="logout">logout</button>
        {/* <button id="make-post" onClick={ clicker }>make post</button> */}
      </div>
    </div>
  )
};


export default Profile;