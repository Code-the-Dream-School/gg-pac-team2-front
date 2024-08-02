import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import App from './App.jsx'
import LoginForm from './pages/login/LoginForm'
import './main.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  }, {
    path: "/login",
    element: <LoginForm />,
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
