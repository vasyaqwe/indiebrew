import { useRef } from 'react'
import { useState } from 'react'
import Button from './Button'
import { motion } from "framer-motion"

function Navbar({ open }) {
    const variants = {
        open: { scaleY: 1, translateY: 0 },
        closed: { scaleY: 0, translateY: -100 }
    }
    return (
        <motion.nav variants={window.innerWidth < 560 ? variants : ''} initial={false} animate={open ? 'open' : 'closed'} className="primary-nav">
            <ul className="nav-list">
                <li><a className='link' href="#">Pricing</a></li>
                <li><a className='link' href="#">Support</a></li>
                <li><Button /></li>
            </ul>
        </motion.nav>
    )
}

export default Navbar
