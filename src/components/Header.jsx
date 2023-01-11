import { useState } from 'react'
import logo from '../assets/logo.svg'
import Navbar from './Navbar'

function Header() {
    const [isNavOpen, setIsNavOpen] = useState(false)

    return (
        <header class="primary-header | container">
            <img src={logo} alt="Indie Brew Logo" class="logo" />

            <button class="nav-toggle"><span class="sr-only">Menu</span></button>
        </header>
    )
}

export default Header
