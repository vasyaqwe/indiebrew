import { motion } from "framer-motion"

export default function Blob({ mousePosition }) {


    const variants = {
        default: {
            x: mousePosition.x - 250,
            y: mousePosition.y - 500,
            rotate: [0, 0, 360, 360, 0],
            scale: [1, 1, 1.3, 1.3, 1],
        },
    }

    const transition = {
        duration: 10,
        ease: 'linear',
        repeat: 0,
        type: 'spring',
        stiffness: 80,
    }
    return (
        <>
            <motion.div className='blob'
                variants={variants}
                animate="default"
                transition={{
                    x: transition,
                    y: transition,
                    scale: transition,
                    default: {
                        duration: 10,
                        repeat: Infinity,
                    },
                }}
            >
                <div className="blur"></div>
            </motion.div>
        </>
    )
}
