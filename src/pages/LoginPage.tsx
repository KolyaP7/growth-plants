import HeaderWrapper from '../components/HeaderWrapper.tsx';
import Header from '../components/Header.tsx';
import FooterSectionVer2 from '../components/FooterSectionVer2.tsx';
import LoginForm from '../components/LoginForm.tsx';
import './LoginPage.css';

export default function LoginPage(){
    return (
        <>
        <Header></Header>
        <div className="header-space"></div>
        <section className="section login-page">
            <LoginForm></LoginForm>
        </section>
        <FooterSectionVer2></FooterSectionVer2>
        <div className="login-page-background"></div>
        </>
    );
}