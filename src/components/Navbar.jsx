import { useRef } from 'react'
import { useState } from 'react'
import Button from './Button'

function Navbar({ isOpen }) {

    return (
        <nav class="primary-nav">
            <ul class="nav-list">
                <li><a href="#">Pricing</a></li>
                <li><a href="#">Support</a></li>
                <li><a href="#" class="btn">Get Started &#8212; it's free</a></li>
            </ul>
        </nav>
    )
}

export default Navbar
