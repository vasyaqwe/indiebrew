import { motion } from "framer-motion"

function Button({ text }) {

    return (
        <motion.a whileTap={{ scale: 0.95, translateY: '2px' }} href="#" className="btn">
            {text}
        </motion.a>
    )
}
Button.defaultProps = {
    text: `<strong className="fw-500">
                Get Started &#8212; </strong>
            it's free`
}
export default Button
