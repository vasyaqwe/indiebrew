import feedImg from '../assets/feed.png'
import avatars from '../assets/avatars.svg'
import BoldTextButton from './BoldTextButton'
import AnimatedNumber from './AnimatedNumber'
import { motion } from "framer-motion"

function Hero() {

    return (
        <section className="section hero | container even-cols">
            <motion.div initial={{ x: -200, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: .5, ease: 'easeInOut' }} className="section-text flow">
                <h1 className="fs-900">Your weekly personal feed digest.</h1>
                <p>With IndieBrew, get personal feeds from resources all around the web,
                    including Reddit, HackerNews, IndieHackers, and much more.</p>
                <BoldTextButton />
                <img src={avatars} alt="a bunch of people's avatars" className="avatars" />
                <p>Join <AnimatedNumber from={0} to={32642} /> IndieBrewers in curating their personal digest.</p>
            </motion.div>
            <motion.img initial={{ x: 200, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: .5, ease: 'easeInOut' }}
                className='hero-img' src={feedImg} alt="feed illustration" />
        </section >
    )
}

export default Hero
