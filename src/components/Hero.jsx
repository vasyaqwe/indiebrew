import feedImg from '../assets/feed.png'
import avatars from '../assets/avatars.svg'
import Button from './Button'
import AnimatedNumber from './AnimatedNumber'

function Hero() {

    return (
        <section className="section hero | container even-cols">
            <div className="section-text flow">
                <h1 className="fs-900">Your weekly personal feed digest.</h1>
                <p>With IndieBrew, get personal feeds from resources all around the web,
                    including Reddit, HackerNews, IndieHackers, and much more.</p>
                <Button />
                <img src={avatars} alt="a bunch of people's avatars" className="avatars" />
                <p>Join <AnimatedNumber from={0} to={32642} /> IndieBrewers in curating their personal digest.</p>
            </div>
            <img className='hero-img' src={feedImg} alt="feed illustration" />
        </section>
    )
}

export default Hero
