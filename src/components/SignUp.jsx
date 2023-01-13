import Button from './Button'
import SecondaryHeader from './SecondaryHeader'

function SignUp() {

    return (
        <>
            <SecondaryHeader />
            <main className='sign-up-page'>
                <div className="even-cols container">
                    <div className='text'>
                        <h1 className='title fs-800'>Create your personalized feed.</h1>
                        <ul className='sign-up-list flow'>
                            <li className='fs-500'><strong className="fw-500">Over 20 resources.</strong> With resources ranging from
                                Reddit to IndieHackers. We've got all your needs
                                covered.
                            </li>
                            <li className='fs-500'><strong className="fw-500">Delivered weekly.</strong>
                                Every week at exactly Tuesday
                                12:00 P.M. EST — expect a value—packed digest
                                right in your email.
                            </li>
                            <li className='fs-500'><strong className="fw-500">Unlimited ideas.</strong>
                                With all the ideas you'll be
                                reading about, what's stopping you from creating
                                a sustainable startup?
                            </li>
                        </ul>
                    </div>
                    <div>
                        <div className="sign-up-box flow" style={{ '--flow-space': '1.5rem' }}>
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
                            <Button className={'btn w-100'} text={"Create an Account"} />
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default SignUp
