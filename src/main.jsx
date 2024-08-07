import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import App from './App.jsx'
import LoginForm from './pages/login/LoginForm'
import MoreInfo from './pages/moreInfo/MoreInfo'
import './main.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  }, {
    path: "/login",
    element: <LoginForm />,
  }, {
    path: "/moreInfo",
    element: <MoreInfo />,
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
