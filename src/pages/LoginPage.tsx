import HeaderWrapper from '../components/HeaderWrapper.tsx';
import Header from '../components/Header.tsx';
import SmallHeader from '../components/SmallHeader.tsx';
import FooterSectionVer2 from '../components/FooterSectionVer2.tsx';
import LoginForm from '../components/LoginForm.tsx';
import { useEffect, useState } from 'react';
import type { User } from '../types.tsx';
import { useNavigate } from 'react-router';

import './LoginPage.css';

interface LoginPageProps{
    user: User | null,
    handleLogin: (
        login: string,
        password: string
    ) => Promise<void>;
}

export default function LoginPage({user, handleLogin}: LoginPageProps){
    const navigate = useNavigate();
    const [isSmallDevice, setIsSmallDevice] = useState(
            () => window.matchMedia('(max-width: 1700px)').matches
        );
    
        useEffect(() => {
            const mediaQuery = window.matchMedia('(max-width: 1700px)');
    
        function handleChange(event: MediaQueryListEvent) {
            setIsSmallDevice(event.matches);
        }
    
        mediaQuery.addEventListener('change', handleChange);
    
        return () => {
            mediaQuery.removeEventListener('change', handleChange);
        };
        }, []);
        useEffect(() => {
            if (user){
                navigate('/');
            }
        }, [user])
    return (
        <>
        {isSmallDevice ? <SmallHeader user={user}></SmallHeader> : <Header user={user}></Header>}
        <div className="header-space"></div>
        <section className="section login-page">
            <LoginForm handleLogin={handleLogin}></LoginForm>
        </section>
        <FooterSectionVer2></FooterSectionVer2>
        <div className="login-page-background"></div>
        </>
    );
}