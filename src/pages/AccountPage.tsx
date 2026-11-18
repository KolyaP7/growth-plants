import Header from '../components/Header.tsx';
import SmallHeader from '../components/SmallHeader.tsx';
import FooterSectionVer2 from '../components/FooterSectionVer2.tsx';
import './AccountPage.css';
import { useState, useEffect } from 'react';
import type { User } from '../types.tsx';

interface AccountPageProps{
    user: User | null,
    handleThemeButton: () => {},
    ColorTheme: String
}

export default function AccountPage({user, handleThemeButton, ColorTheme}: AccountPageProps){
    
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

    const [ Name, SetName ] = useState(user?.Name);

    
    useEffect(() => {
        document.documentElement.setAttribute('data-theme', ColorTheme);
    }, [ColorTheme]);

    return (
        <>
            {isSmallDevice ?
                <SmallHeader user={user}></SmallHeader>
                : <Header user={user}></Header>}
            <div className="header-space"></div>
            <section className="section account-page">
                <div className="account-information-field">
                    <div className="account-information-field__image-container">
                        <img className="account-information-field__image" src={user?.imageLink}></img>
                    </div>
                    <div className="account-information-field__content">
                        <p className="account-information-field__content-text">Choose new avatar</p>
                        <div className="account-information-field__buttons-group">
                            <button className="account-information-field__button account-information-field__upload-button">Upload Photo</button>
                            <button className="account-information-field__button account-information-field__see-button">See Photo</button>
                            <button className="account-information-field__button account-information-field__delete-button">Delete Photo</button>
                        </div>
                        <div className="account-information-field__content-description">
                            Acceptable format: JPG, PNG, JPEG
                            Maximum file size 40 MB, maximum image size 1000 px by 1000 px
                        </div>


                    </div>
                    <div className="account-information-field__set-color-theme-container">
                        <h3 className="account-information-field__set-color-theme-title">Set web-site color theme</h3>
                        <div onClick={handleThemeButton} className="account-information-field__set-color-theme-icon-container">
                            <div className={`account-information-field__set-color-theme-icon ${ColorTheme == "light" ? "account-information-field__set-color-theme-icon--white" : "account-information-field__set-color-theme-icon--black"}`}></div>
                        </div>
                        {/* <div onClick={handleThemeButton} className="account-information-field__set-color-theme-icon-invisible"></div> */}

                        <h5 className="account-information-field__set-color-theme-state">Theme: {ColorTheme}</h5>
                    </div>
                </div>
                <div className="account-information-forms-container">
                    <div className="account-information-form-field">
                    <form className="account-information-form">
                        <h3 className="account-information-form-title">
                            Yourself information
                        </h3>
                        <label className="account-information-form-label">
                            Write your name
                            <input type="text" className="account-information-form-input"></input>
                        </label>
                        <label className="account-information-form-label">
                            Write your last name
                            <input type="text" className="account-information-form-input"></input>
                        </label>
                        <label className="account-information-form-label">
                            Write your email
                            <input type="email" className="account-information-form-input"></input>
                        </label>
                        <button type="submit" className="account-information-form-button">Update</button>
                    </form>
                </div>
                <div className="account-information-form-field">
                    <form className="account-information-form">
                        <h3 className="account-information-form-title">
                            Password
                        </h3>
                        <label className="account-information-form-label">
                            Write your current password
                            <input type="password" className="account-information-form-input"></input>
                        </label>
                        <label className="account-information-form-label">
                            Write new password
                            <input type="password" className="account-information-form-input"></input>
                        </label>
                        <label className="account-information-form-label">
                            Write new password again
                            <input type="password" className="account-information-form-input"></input>
                        </label>
                        <button type="submit" className="account-information-form-button">Update</button>
                    </form>
                </div>
                </div>
                
            </section>
            <FooterSectionVer2></FooterSectionVer2>
            <div className="account-page-background"></div>
        </>
    );
}