import { animate } from "framer-motion"
import { useEffect, useRef } from "react"

function AnimatedNumber({ from, to }) {
    const ref = useRef()
    const formatter = Intl.NumberFormat('en', { notation: 'standard' })

    useEffect(() => {
        const controls = animate(from, to, {
            duration: 1,
            onUpdate(value) {
                value = formatter.format(value.toFixed(0))
                ref.current.textContent = value
            }
        })
        return () => controls.stop()
    }, [from, to])
    return (
        <span ref={ref} className="text-accent" />
    )
}

export default AnimatedNumber
