import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import App from './App.jsx'
import LoginForm from './pages/login/LoginForm'
import Info from './pages/info/Info'
import './main.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  }, {
    path: "/login",
    element: <LoginForm />,
  }, {
    path: "/info",
    element: <Info />,
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
