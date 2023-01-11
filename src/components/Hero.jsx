import feedImg from '../assets/feed.png'
import avatars from '../assets/avatars.svg'
import Button from './Button'

function Hero() {

    return (
        <section className="section hero | container even-cols">
            <div className="section-text flow">
                <h1 className="fs-900">Your weekly personal feed digest.</h1>
                <p>With IndieBrew, get personal feeds from resources all around the web,
                    including Reddit, HackerNews, IndieHackers, and much more.</p>
                <Button />
                <img src={avatars} alt="a bunch of people's avatars" className="avatars" />
                <p>Join <span className="text-accent">32,642</span> IndieBrewers in curating their personal digest.</p>
            </div>
            <img src={feedImg} alt="feed illustration" />
        </section>
    )
}

export default Hero
