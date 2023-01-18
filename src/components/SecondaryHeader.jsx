import logo from '../assets/logo.svg'
import IconButton from './IconButton'
import { ReactComponent as BackIcon } from '../assets/back-arrow.svg'
import { Link } from 'react-router-dom'
import { motion } from "framer-motion"

function SecondaryHeader() {
    return (
        <motion.div initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: .5, ease: 'easeInOut' }}
            className="secondary-header-wrapper | container">
            <header className="header secondary-header">
                <img src={logo} alt="Indie Brew Logo" className="logo" />
                <div className='flex'>
                    <IconButton className={'btn-icon'} text={'Back to homepage'} icon={<BackIcon />} />
                    <Link to="/" className='mobile-only hover-underline fs-600 fw-500'> Back to homepage</Link>
                </div>
            </header >
        </motion.div>
    )
}

export default SecondaryHeader
