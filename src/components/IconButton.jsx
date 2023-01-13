import { motion } from "framer-motion"

function IconButton({ icon }) {
    const translate = {
        hover: {
            x: -6,
        }
    };
    return (
        <motion.a whileHover="hover" whileTap={{ scale: 0.95, translateY: '2px' }} href="#" className="btn-icon">
            <motion.span variants={translate}>{icon}</motion.span>
        </motion.a>
    )
}

export default IconButton
