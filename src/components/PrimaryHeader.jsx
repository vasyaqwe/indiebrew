import { useState } from 'react'
import logo from '../assets/logo.svg'
import Navbar from './Navbar'
import { motion } from "framer-motion"

function PrimaryHeader() {
    const [isNavOpen, setIsNavOpen] = useState(false)

    return (
        <motion.header initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: .5, ease: 'easeInOut' }}
            className="header primary-header | container">
            <img src={logo} alt="Indie Brew Logo" className="logo" />
            <Navbar open={isNavOpen} />
            <button className="nav-toggle" onClick={() => setIsNavOpen(prev => !prev)}
                aria-expanded={isNavOpen}><span className="sr-only">Menu</span></button>
        </motion.header>
    )
}

export default PrimaryHeader
