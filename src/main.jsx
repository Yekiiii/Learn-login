import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './components/home.jsx'
import './index.css'
import Login from './components/login.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  },
  {
    path:"/login",
    element: <Login/>
  }
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
