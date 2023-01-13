import { motion } from "framer-motion"
import { Link } from 'react-router-dom'

function Button({ text }) {

    return (
        <Link to="/signup">
            <motion.a whileTap={{ scale: 0.95, translateY: '2px' }} className="btn">
                {text}
            </motion.a>
        </Link>
    )
}
Button.defaultProps = {
    text: `<strong className="fw-500">
                Get Started &#8212; </strong>
            it's free`
}
export default Button
