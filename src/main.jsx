import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Root } from 'postcss';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import RootPage from './components/RootPage/RootPage';
import ErrorPage from './components/ErrorPage/ErrorPage';
import JobDetails from './components/JobDetails/JobDetails';
import AppliedJobs from './components/AppliedJobs/AppliedJobs';
import Jobss from './components/Jobss/Jobss';
import Blog from './components/Blog/Blog';

const router = createBrowserRouter([
  {
    path : '/',
    element : <RootPage></RootPage>,
    errorElement: <ErrorPage></ErrorPage>,
    children : [

      {
        path: '/',
        element: <Home></Home>

      },
      {
        path: '/job/:id',
        loader: ()=> fetch('jobs.json'),
        element: <JobDetails></JobDetails>
      },
      {
        path: '/applied',
        element: <AppliedJobs></AppliedJobs>,
        loader: ()=> fetch('jobs.json')
      },

      {
        path: '/jobs',
        element: <Jobss></Jobss>
      },
    {
      path: '/blogs',
      element: <Blog></Blog>
    }
     
    ]

  }

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
