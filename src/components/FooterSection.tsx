import LogoSmallCircle from './LogoSmallCircle.tsx';
import SocialNet from './SocialNet.tsx';
import './FooterSection.css';
export default function Footer(){
    return (
        <section className="section footer">
            <div className="footer__decoration">
                <div className="footer__decoration-line"></div>
                <div className="footer__logo">
                    <LogoSmallCircle></LogoSmallCircle>
                </div>
                <div className="footer__decoration-line"></div>
            </div>
            <div className="footer__header">
                <h2 className="footer__title">
                    Join the Community!
                    </h2>
                <p className="footer__text">
                    Subscribe to The Forager to receive monthly plant tips,
                    store updates, promotions & more
                </p>
            </div>
            <div className="footer__social-media-section">
                <div className="footer__social-media">
                    <SocialNet title="Instagram" link="#instagram"></SocialNet>
                    <SocialNet title="Twitter" link="#Twitter"></SocialNet>
                    <SocialNet title="Linkedin" link="#Linkedin"></SocialNet>
                    <SocialNet title="Whatsapp" link="#Whatsapp"></SocialNet>
                    <SocialNet title="Pinterest" link="#Pinterest"></SocialNet>
                </div>
                <div className="footer__social-media-decoration-line"></div>
                <p className="right-text">@2026, All Right Reserved.</p>
            </div>
        </section>
    );
}