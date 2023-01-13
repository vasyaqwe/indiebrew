import socials from '../assets/socials.png'
import LinkTag from './LinkTag'
import { motion } from "framer-motion"

function Resources() {

    return (
        <section className="section resources | container even-cols">
            <motion.div initial={{ x: -200, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: .5, ease: 'easeInOut' }}
                className="section-text flow" style={{ '--flow-space': '.5rem' }}>
                <h2 className="fs-800">Curate your feed from dozens of resources</h2>
                <p>We cover all major platforms where one could want to curate their feed
                    from: Reddit, ProductHunt, IndieHackers, and so much more.</p>
                <LinkTag text={'See full list of resources →'} />
            </motion.div>
            <motion.div initial={{ x: 200, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: .5, ease: 'easeInOut' }}>
                <img className='socials' src={socials} alt="icons of social medias" />
            </motion.div>
        </section>
    )
}

export default Resources
