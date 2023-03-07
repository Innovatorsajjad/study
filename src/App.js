import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Shared/Main/Main';
import Home from './Pages/Home/Home';
import Courses from './Pages/Courses/Courses';
import Event from './Pages/Event/Event';
import Gallery from './Pages/Gallery/Gallery';
import Page from './Pages/Page/Page';
import News from './Pages/News/News';
import Contact from './Pages/Contact/Contact';
import React from 'react';



function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
          path: "/",
          element:<Home></Home> ,
        },
        {
          path: "/courses",
          element:<Courses></Courses>,
        },
        {
          path: "/event",
          element:<Event></Event> ,
        },
        {
          path: "/gallery",
          element:<Gallery></Gallery> ,
        },
        {
          path: "/pages",
          element:<Page></Page>,
        },
        {
          path: "/news",
          element:<News></News>,
        },
        {
          path: "/contact",
          element:<Contact></Contact>,
        },
      ]
    },
  ]);
  
  return (
    <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
  );
}

export default App;
