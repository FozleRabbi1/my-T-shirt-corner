import { useState } from 'react'
import './App.css'
import NavBar from './ComponentFile/SharedFile/NavBarFile/NavBar'
import { Outlet } from 'react-router-dom'

function App() {

  return (
    <div className="App">
      <NavBar></NavBar>
      <Outlet></Outlet>

    </div>
  )
}

export default App
