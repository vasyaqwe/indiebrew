import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import AnimatedShapes from './components/AnimatedShapes'


function App() {
  return (
    <>
      <AnimatedShapes />
      <Header />
      <Main />
      <Footer />
    </>
  )
}

export default App
