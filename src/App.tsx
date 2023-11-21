import { useState } from 'react'
import './App.css'
import GetStarted from './pages/GetStarted'
import Onboarding from './pages/Onboarding'
import Signin from './pages/SignIn'
import ProfilePage from './pages/ProfilePage'
import Dashboard from './pages/Dashboard'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <GetStarted title="GetStarted" />,
  },
  {
    path: "/onboarding/:id",
    element: <Onboarding title="Onboarding" />,
  },
  {
    path: "/onboarding",
    element: <Onboarding title="Onboarding" />,
  },
  {
    path: "/signin",
    element: <Signin title="Signin" />,
  },
  {
    path: "/profilepage",
    element: <ProfilePage title="ProfilePage" />,
  }, 
  {
    path: "/dashboard",
    element: <Dashboard title="Dashboard" />,
  },

]);


function App() {

  return (
    <>
      <RouterProvider router={router} /> 
    </>
  )
}

export default App