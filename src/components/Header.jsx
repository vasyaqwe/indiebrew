import { useState } from 'react'
import logo from '../assets/logo.svg'
import Navbar from './Navbar'

function Header() {
    const [isNavOpen, setIsNavOpen] = useState(false)

    return (
        <header className="primary-header | container">
            <img src={logo} alt="Indie Brew Logo" className="logo" />
            <Navbar open={isNavOpen} />
            <button className="nav-toggle"><span className="sr-only">Menu</span></button>
        </header>
    )
}

export default Header
