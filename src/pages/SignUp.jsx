import Button from '../components/Button'
import SecondaryHeader from '../components/SecondaryHeader'
import { motion } from 'framer-motion'

function SignUp() {

    const pros = [
        { title: 'Over 20 resources.', body: " With resources ranging from Reddit to IndieHackers. We've got all your needs covered." },
        { title: 'Delivered weekly.', body: " Every week at exactly Tuesday 12:00 P.M. EST — expect a value—packed digest right in your email." },
        { title: 'Unlimited ideas.', body: " With all the ideas you'll be reading about, what's stopping you from creating a sustainable startup?" },
    ]
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                delay: .25,
                staggerChildren: 0.25
            }
        }
    }

    const item = {
        hidden: {
            opacity: 0, x: -200, transition: {
                ease: 'easeInOut',
                duration: .5
            }
        },
        show: {
            opacity: 1, x: 0, transition: {
                ease: 'easeInOut',
                duration: .5
            }
        }
    }
    const prosEls = pros.map((pro, i) => (
        <motion.li variants={item} key={i} className='fs-500'>
            <strong className='fw-500'>
                {pro.title}
            </strong>
            {pro.body}
        </motion.li>
    ))

    return (
        <>
            <SecondaryHeader />
            <main className='sign-up-page'>
                <div className="even-cols container">
                    <div className='sign-up-page-text'>
                        <motion.h1 initial={{ x: -200, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: .5, ease: 'easeInOut' }} className='title fs-800'>Create your personalized feed.</motion.h1>
                        <motion.ul variants={container}
                            initial="hidden"
                            animate="show"
                            className='sign-up-list flow'
                        >
                            {prosEls}
                        </motion.ul>
                    </div>
                    <motion.div initial={{ x: 200, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: .5, ease: 'easeInOut' }} className="sign-up-box flow" style={{ '--flow-space': '1.5rem' }}>
                        <h2 className='fs-700'>Create your IndieBrew Account</h2>
                        <div>
                            <label className='fw-500' htmlFor="email">Email</label>
                            <input className='input' type="email" placeholder='john@example.com' />
                        </div>
                        <div>
                            <label className='fw-500' htmlFor="name">Full Name</label>
                            <input className='input' type="name" placeholder='John Doe' />
                        </div>
                        <div>
                            <label className='fw-500' htmlFor="password">Password</label>
                            <input className='input' type="password" placeholder='At least 8 characters' />
                        </div>
                        <div className='flex-start'>
                            <input className='checkbox' type="checkbox" id='terms' />
                            <label htmlFor="terms" >
                                By creating an account on IndieBrew, you agree to the <a href="#" className="text-accent" style={{ textDecoration: 'underline' }}>Terms & Conditions</a>
                            </label>
                        </div>
                        <Button className={'btn w-100'} text={"Create an account"} />
                    </motion.div>
                </div>
            </main>
        </>
    )
}

export default SignUp
