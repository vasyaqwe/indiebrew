import logo from '../assets/logo.svg'
import IconButton from './IconButton'
import { ReactComponent as BackIcon } from '../assets/back-arrow.svg'
import { Link } from 'react-router-dom'

function SecondaryHeader() {

    return (
        <div className="secondary-header-wrapper | container">
            <header className="header secondary-header">
                <img src={logo} alt="Indie Brew Logo" className="logo" />
                <Link to="/" className='hover-underline fs-600 fw-500 flex'>
                    <IconButton icon={<BackIcon />} /> Back to homepage
                </Link>
            </header>
        </div>
    )
}

export default SecondaryHeader
