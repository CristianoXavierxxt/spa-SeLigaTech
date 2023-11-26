import React from 'react'
import ReactDOM from 'react-dom/client'
import { GlobaStyled } from './GlobaStyled.jsx'
import App from './App.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar.jsx'
import Home from "./pages/Home/Home.jsx"
import { Search } from './pages/Search/Search.jsx'
import ErrorPage from './pages/NotFoudRouter/NotFoundRouter.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar/>,
    errorElement: <ErrorPage/> ,
    children: [
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/search/:title",
        element: <Search/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobaStyled />
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
