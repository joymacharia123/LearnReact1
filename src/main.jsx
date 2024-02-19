import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './pages/App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Projects from './pages/projects.jsx'
import About from './pages/About.jsx'
import Contacts from './pages/Contacts.jsx'

const routes = createBrowserRouter([
  {
    path: '/',
    element:<App/>
  },
  {
    path: '/projects',
    element: <Projects/>
  },
  {
    path: '/about',
    element: <About/>
  },
  {
    path: '/contacts',
    element: <Contacts/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={routes}/>
  </React.StrictMode>,
)
