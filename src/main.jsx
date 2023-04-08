import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import NotFound from './ComponentFile/SharedFile/NotFoundFile/NotFound'
import Home from './ComponentFile/HomeFile/Home'
import About from './ComponentFile/AboutUsFile/About'
import Login from './ComponentFile/LoginFile/Login'

const router = createBrowserRouter([
  {
    path: "/", element: <App></App>,
    children: [
      {
        path: "/", element: <Home></Home>,
        loader : ()=> fetch("https://raw.githubusercontent.com/ProgrammingHero1/t-shirt-data/main/tshirt.json")
      },
      { path: "about", element: <About></About> },
      { path: "login", element: <Login></Login> },
      { path: "*", element: <NotFound></NotFound> }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} ></RouterProvider>
  </React.StrictMode>,
)
