import './FooterSectionVer2.css';

import LogoSmallCircle from './LogoSmallCircle.tsx';

export default function FooterSectionVer2(){
    return (
        <section className="section footer-section-ver2">
            <div className="footer-section-ver2__header">
                <h1 className="footer-section-ver2__header-title">Start exploring plants today <br></br> Free and without limits.</h1>
                <div className="footer-section-ver2__header-buttons-group">
                    <button className="footer-section-ver2__header-button footer-section-ver2__header-button-get-started">Get started</button>
                    <button className="footer-section-ver2__header-button footer-section-ver2__header-button-contact-us">Contact us</button>
                </div>
            </div>
            <div className="footer-section-ver2__decoration-line">
                </div>
            <div className="footer-section-ver2__footer">
                <div className="footer-section-ver2__footer-about-us">
                    <div className="footer-section-ver2__footer-about-us-text">
                        <div className="footer-section-ver2__footer-about-us-logo">
                            <div className="footer-section-ver2__footer-about-us-logo-container">
                                <LogoSmallCircle></LogoSmallCircle>
                            </div>
                            <h3 className="footer-section-ver2__footer-about-us-title">Growth <br></br> <span className="footer-section-ver2__footer-about-us-title-description">World of plants</span></h3>
                        </div>
                        
                        <p className="footer-section-ver2__footer-about-us-description">A platform that brings together knowledge about plants, scientific research, and practical experience of gardeners and botanists.</p>
                    </div>
                    <div className="footer-section-ver2__footer-about-us-contacts-group">
                        <div className="footer-section-ver2__footer-about-us-social">
                            <p className="footer-section-ver2__footer-about-us-social-net">Facebook</p>
                            <p className="footer-section-ver2__footer-about-us-social-net">Twitter</p>
                            <p className="footer-section-ver2__footer-about-us-social-net">Pinterest</p>
                            <p className="footer-section-ver2__footer-about-us-social-net">Instagram</p>
                        </div>
                        <div className="footer-section-ver2__footer-about-us-contacts">
                            <p>+7 (965) 407-53-01</p>
                            <p>Growth.encyclopedia@email.com</p>
                        </div>
                        
                    </div>
                   
                </div>
                <div className="footer-section-ver2__footer-fields">
                    <div className="footer-section-ver2__footer-field footer-section-ver2__footer-categories">
                        <h3 className="footer-section-ver2__footer-feild-title">Navigation</h3>
                        <ul className="footer-section-ver2__footer-feild-list">
                            <li className="footer-section-ver2__footer-feild-list-element">Home</li>
                            <li className="footer-section-ver2__footer-feild-list-element">Encyclopedia</li>
                            <li className="footer-section-ver2__footer-feild-list-element">Blog</li>
                            <li className="footer-section-ver2__footer-feild-list-element">Contact</li>
                            <li className="footer-section-ver2__footer-feild-list-element">Shop</li>
                            <li className="footer-section-ver2__footer-feild-list-element">Login | Registration</li>
                        </ul>
                    </div>
                    <div className="footer-section-ver2__footer-field footer-section-ver2__footer-categories">
                        <h3 className="footer-section-ver2__footer-feild-title">Categories</h3>
                        <ul className="footer-section-ver2__footer-feild-list">
                            <li className="footer-section-ver2__footer-feild-list-element">Plant World</li>
                            <li className="footer-section-ver2__footer-feild-list-element">Flowers & Ornamentals</li>
                            <li className="footer-section-ver2__footer-feild-list-element">Trees & Shrubs</li>
                            <li className="footer-section-ver2__footer-feild-list-element">Growing & Care</li>
                            <li className="footer-section-ver2__footer-feild-list-element">Botany & Research</li>
                            <li className="footer-section-ver2__footer-feild-list-element">Medicinal & Useful Plants</li>
                        </ul>
                    </div>
                    <div className="footer-section-ver2__footer-field footer-section-ver2__footer-resources">
                        <h3 className="footer-section-ver2__footer-feild-title">Resources</h3>
                        <ul className="footer-section-ver2__footer-feild-list">
                            <li className="footer-section-ver2__footer-feild-list-element">Knowledge Base</li>
                            <li className="footer-section-ver2__footer-feild-list-element">Articles</li>
                            <li className="footer-section-ver2__footer-feild-list-element">Glossary</li>
                            <li className="footer-section-ver2__footer-feild-list-element">Tools</li>
                            <li className="footer-section-ver2__footer-feild-list-element">Plant MindMap</li>
                            <li className="footer-section-ver2__footer-feild-list-element">Community</li>
                        </ul>
                    </div>
                    <div className="footer-section-ver2__footer-field footer-section-ver2__footer-support">
                        <h3 className="footer-section-ver2__footer-feild-title">Support</h3>
                        <ul className="footer-section-ver2__footer-feild-list">
                            <li className="footer-section-ver2__footer-feild-list-element">About the Project</li>
                            <li className="footer-section-ver2__footer-feild-list-element">Contact</li>
                            <li className="footer-section-ver2__footer-feild-list-element">FAQ</li>
                            <li className="footer-section-ver2__footer-feild-list-element">Privacy Policy</li>
                            <li className="footer-section-ver2__footer-feild-list-element">Terms of Use</li>
                            <li className="footer-section-ver2__footer-feild-list-element">Sitemap</li>
                        </ul>
                    </div>
                </div>
            </div>
            <h3 className="right-text">@2026, Growth.world of plants, All Right Reserved.</h3>
        </section>
    );
}