import { useState } from 'react'
import './App.css'
import Usercontextprovider from './context/Usercontextprovider'
import Login from './Copmponents/Login'
import Profile from './Copmponents/Profile'

function App() {
  

  return (
    <Usercontextprovider>
      <h1>raect and context api</h1>
      <Login/>
      <Profile/>
    </Usercontextprovider>
  )
}

export default App
