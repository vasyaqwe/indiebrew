import './App.css'
import Home from './pages/Home'
import SignUp from './pages/SignUp'
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
