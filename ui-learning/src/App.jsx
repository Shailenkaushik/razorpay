import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Feature from './components/Feature'
import Feature2 from './components/Feature2'
import Feature3 from './components/Feature3'

function App() {
  

  return (
    <>
    <Navbar></Navbar>
    <Hero></Hero>
    <Feature></Feature>
    <Feature2></Feature2>
    <Feature3></Feature3>
    </>
  )
}

export default App
