import logo from '../assets/logo.svg'

function Footer() {

    return (
        <footer className="footer">
            <div className="container footer-container">
                <div className="footer-intro flow">
                    <img src={logo} alt="Indie Brew Logo" className="logo" />
                    <p>With IndieBrew, get personal feeds from resources all around the web,
                        including Reddit, HackerNews, IndieHackers, and much more.</p>
                    <p>Made with ❤ in the UK.</p>
                </div>
                <div className="footer-nav">
                    <div className="footer-list flow">
                        <h3 className="fs-500">Sitemap</h3>
                        <ul>
                            <li><a href="#">Homepage</a></li>
                            <li><a href="#">Pricing</a></li>
                        </ul>
                    </div>
                    <div className="footer-list flow">
                        <h3 className="fs-500">Resources</h3>
                        <ul>
                            <li><a href="#">Support</a></li>
                            <li><a href="#">Contact</a></li>
                            <li><a href="#">FAQ</a></li>
                        </ul>
                    </div>
                    <div className="footer-list flow">
                        <h3 className="fs-500">Company</h3>
                        <ul>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Customers</a></li>
                            <li><a href="#">Blog</a></li>
                        </ul>
                    </div>
                    <div className="footer-list flow">
                        <h3 className="fs-500">Portfolios</h3>
                        <ul>
                            <li><a href="#">HackerNews</a></li>
                            <li><a href="#">Reddit</a></li>
                            <li><a href="#">Twitter</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
