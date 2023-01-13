import { motion } from "framer-motion"

function AnimatedShapes() {
    const animationDuration = 5

    return (
        <div className="shapes-wrapper">
            <motion.div className='animated-shape shape-1'
                animate={{ x: [0, 100, 100], y: [0, 100, 100], scale: [1, 2, 1], rotate: [0, 50, 0] }}
                transition={{ duration: animationDuration, repeat: Infinity, repeatType: "reverse", }}
            />
            <motion.div className='animated-shape shape-2'
                animate={{ x: [0, 200, 0], y: [0, 50, 200], scale: [1, 2, 1], rotate: [0, 50, 0] }}
                transition={{ duration: animationDuration, repeat: Infinity, repeatType: "reverse", delay: 2 }}
            />
            <motion.div className='animated-shape shape-3'
                animate={{ x: [0, 50, 100], y: [0, 60, 150], scale: [1, 2, 1] }}
                transition={{ duration: animationDuration, repeat: Infinity, repeatType: "reverse", delay: 3 }}
            />
        </div>

    )
}

export default AnimatedShapes
