import { useState } from 'react' 
import './App.css'  
import GetStarted from './pages/GetStarted'
import Onboarding from './pages/Onboarding'
import Signin from './pages/SignIn'
import ProfilePage from './pages/ProfilePage'
import Dashboard from './pages/Dashboard'


function App() { 

  return (
    <>  
     <GetStarted title="GetStarted" />
     <hr />
     <Onboarding title="Onboarding" />
     <hr />
     <Signin title="Signin" />
     <hr />
     <ProfilePage  title="ProfilePage"  />
     <hr />
     <Dashboard title="DashboardProps" />
    </>
  )
}

export default App