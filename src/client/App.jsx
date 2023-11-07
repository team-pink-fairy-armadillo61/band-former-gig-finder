import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Profile from './routes/Profile.jsx';
import Login from './routes/Login.jsx';
import Logout from './routes/Logout.jsx';
import Signup from './routes/Signup.jsx';
import NotFound from './routes/NotFound.jsx';
import Feed from './routes/Feed.jsx';
import Group from './routes/Group.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Feed />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/logout',
    element: <Logout />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    // path: "/user/:userID",
    path: "/user",
    element: <Profile />,
  },
  {
    path: '/group/:groupid',
    element: <Group />,
  },
  {
    path: '/notfound',
    element: <NotFound />,
  },
]);

const App = (props) => {
  return <RouterProvider router={router} />;
};

export default App;
