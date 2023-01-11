import socials from '../assets/socials.png'
import Link from './Link'

function Resources() {

    return (
        <section className="section resources | container even-cols">
            <div className="section-text">
                <h2 className="fs-800">Curate your feed from dozens of resources</h2>
                <p>We cover all major platforms where one could want to curate their feed
                    from: Reddit, ProductHunt, IndieHackers, and so much more.</p>
                <Link />
            </div>
            <div>
                <img src={socials} alt="icons of social medias" />
            </div>
        </section>
    )
}

export default Resources
