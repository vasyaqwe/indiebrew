import { useRef } from 'react'
import { useState } from 'react'
import Button from './Button'

function Navbar({ open }) {

    return (
        <nav className="primary-nav">
            <ul className="nav-list">
                <li><a href="#">Pricing</a></li>
                <li><a href="#">Support</a></li>
                <li><a href="#" className="btn">Get Started &#8212; it's free</a></li>
            </ul>
        </nav>
    )
}

export default Navbar
