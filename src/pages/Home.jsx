import PrimaryHeader from '../components/PrimaryHeader'
import Main from '../components/Main'
import Footer from '../components/Footer'
import AnimatedShapes from '../components/AnimatedShapes'
import Blob from '../components/Blob'
import { useState, useRef, useEffect } from 'react'
import { getRelativeCoordinates } from '../utils'

function Home() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
    const pageRef = useRef()

    const handleMouseMove = (e) => {
        setMousePosition(getRelativeCoordinates(e, pageRef.current))
    }

    return (
        <div ref={pageRef} onMouseMove={handleMouseMove}>
            <Blob mousePosition={mousePosition} />
            <AnimatedShapes />
            <PrimaryHeader />
            <Main />
            <Footer />
        </div>
    )
}

export default Home
