import './App.css'
import Home from './components/Home'
import SignUp from './components/SignUp'
import { Routes, Route } from 'react-router-dom'
import { AnimatePresence } from "framer-motion"

function App() {
  return (
    <AnimatePresence>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/signup' element={<SignUp />} />
      </Routes>
    </AnimatePresence>
  )
}

export default App
