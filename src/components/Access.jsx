import LinkTag from './LinkTag'
import phoneImg from "../assets/phone.png"
import { motion } from "framer-motion"

function Access() {

    return (
        <section
            className="section access | container even-cols" style={{ '--gap': '4rem' }}>
            <motion.img initial={{ y: 200, opacity: 0 }}
                viewport={{ once: true }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: .5, ease: 'easeInOut' }}
                src={phoneImg} alt="phone illustration" />
            <motion.div initial={{ x: 200, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: .5, ease: 'easeInOut' }}
                className="section-text flow" style={{ '--flow-space': '.5rem' }}>
                <h2 className="fs-800">Access your feed from the comfort of your phone.</h2>
                <p>With native apps for both iOS and Android, accessing your curated
                    content has never been easier.</p>
                <LinkTag text={'Sign up for the waitlist →'} />
            </motion.div>
        </section>
    )
}

export default Access
