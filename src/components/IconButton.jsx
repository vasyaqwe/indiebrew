import { motion } from "framer-motion"
import { useNavigate } from 'react-router-dom'

function IconButton({ icon, className }) {
    const navigate = useNavigate()
    const translate = {
        hover: {
            x: -6,
        }
    }
    return (
        <motion.button className={className} whileTap={{ scale: 0.95, translateY: '2px' }} >
            <motion.span onClick={() => navigate('/')} whileHover="hover" variants={translate}>{icon}</motion.span>
        </motion.button>
    )
}

export default IconButton
