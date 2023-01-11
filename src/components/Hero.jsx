import heroImg from '../assets/hero-img.png'
import Button from './Button'

function Hero() {

    return (
        <section class="section hero | container even-cols">
            <div class="section-text">
                <h1 class="fs-900">Your weekly personal feed digest.</h1>
                <p>With IndieBrew, get personal feeds from resources all around the web,
                    including Reddit, HackerNews, IndieHackers, and much more.</p>
                <a href="#" class="btn">Get Started &#8212; it's free</a>
                <img src="./assets/avatars.svg" alt="a bunch of people's avatars" class="avatars" />
                <p>Join <span class="text-accent">32,642</span> IndieBrewers in curating their personal digest.</p>
            </div>
            <img src="./assets/feed.png" alt="feed illustration" />
        </section>
    )
}

export default Hero
