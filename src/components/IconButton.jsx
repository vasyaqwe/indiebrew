import { motion } from "framer-motion"

function IconButton({ icon, className }) {
    const translate = {
        hover: {
            x: -6,
        }
    }
    return (
        <motion.button className={className} whileTap={{ scale: 0.95, translateY: '2px' }} >
            <motion.span whileHover="hover" variants={translate}>{icon}</motion.span>
        </motion.button>
    )
}

export default IconButton
