import React from 'react'
import ReactDOM from 'react-dom/client'
import { GlobaStyled } from './GlobaStyled.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar.jsx'
import Home from "./pages/Home/Home.jsx"
import { Search } from './pages/Search/Search.jsx'
import ErrorPage from './pages/NotFoudRouter/NotFoundRouter.jsx'
import { Authentication } from './pages/Authentication/Authentication.jsx'
import { Profile } from './pages/Profile/Profile.jsx'
import UserProvider from './Context/UserContext.jsx'
import Careers from './pages/Careers/Careers.jsx'
import Career1 from './pages/Careers/Career1/Career1.jsx'

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
      },
      {
        path: "/profile",
        element: <Profile/>,
      },
      {
        path: "/career",
        element: <Careers/>,
      },
      {
        path: "/career1",
        element: <Career1/>,
      }
    ]
  },
  {
    path: "/auth",
    element: <Authentication/>,
  }

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobaStyled />
    <UserProvider>
      <RouterProvider router={router}/>
    </UserProvider>
  </React.StrictMode>,
)
