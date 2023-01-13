import { useState } from 'react'
import logo from '../assets/logo.svg'
import Navbar from './Navbar'

function PrimaryHeader() {
    const [isNavOpen, setIsNavOpen] = useState(false)

    return (
        <header className="header primary-header | container">
            <img src={logo} alt="Indie Brew Logo" className="logo" />
            <Navbar open={isNavOpen} />
            <button className="nav-toggle" onClick={() => setIsNavOpen(prev => !prev)}
                aria-expanded={isNavOpen}><span className="sr-only">Menu</span></button>
        </header>
    )
}

export default PrimaryHeader
