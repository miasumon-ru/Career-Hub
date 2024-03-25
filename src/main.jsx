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
     
    ]

  }

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
