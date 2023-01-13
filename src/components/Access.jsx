import Link from './Link'
import phoneImg from "../assets/phone.png"

function Access() {

    return (
        <section className="section access | container even-cols" style={{ '--gap': '4rem' }}>
            <img src={phoneImg} alt="phone illustration" />
            <div className="section-text flow" style={{ '--flow-space': '.5rem' }}>
                <h2 className="fs-800">Access your feed from the comfort of your phone.</h2>
                <p>With native apps for both iOS and Android, accessing your curated
                    content has never been easier.</p>
                <Link />
            </div>
        </section>
    )
}

export default Access
